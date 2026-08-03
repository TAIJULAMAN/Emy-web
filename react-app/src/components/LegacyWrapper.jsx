import React, { useEffect, useRef } from 'react';

export default function LegacyWrapper({ pageUrl }) {
  const containerRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    async function loadLegacyPage() {
      try {
        const response = await fetch(pageUrl);
        const html = await response.text();
        
        if (!isMounted) return;

        // Parse the HTML string into a document
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // Extract body content
        const bodyContent = doc.body.innerHTML;
        if (containerRef.current) {
          containerRef.current.innerHTML = bodyContent;
        }

        // Extract and execute scripts
        const scripts = Array.from(doc.querySelectorAll('script'));
        for (const script of scripts) {
          if (!isMounted) break;
          
          const newScript = document.createElement('script');
          
          // Copy all attributes (like type="text/babel", data-presets, etc)
          Array.from(script.attributes).forEach(attr => {
            newScript.setAttribute(attr.name, attr.value);
          });
          
          if (script.hasAttribute('src')) {
            let src = script.getAttribute('src');
            // If it's a relative URL, point it to the legacy folder
            if (src && !src.startsWith('http') && !src.startsWith('/')) {
               src = `/legacy/${src}`;
               newScript.setAttribute('src', src);
            }
            newScript.async = false; // Maintain execution order
          } else {
            newScript.textContent = script.textContent;
          }
          
          document.body.appendChild(newScript);
        }

        // Also inject stylesheets from the head
        const styles = Array.from(doc.querySelectorAll('link[rel="stylesheet"]'));
        styles.forEach(style => {
          const newStyle = document.createElement('link');
          newStyle.rel = 'stylesheet';
          let href = style.getAttribute('href');
          if (href && !href.startsWith('http') && !href.startsWith('/')) {
             href = `/legacy/${href}`;
          }
          newStyle.href = href;
          document.head.appendChild(newStyle);
        });

      } catch (error) {
        console.error("Failed to load legacy page:", error);
      }
    }

    loadLegacyPage();

    return () => {
      isMounted = false;
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
      // Note: Full cleanup of injected global scripts/styles is hard.
      // In a real migration, we'd handle this more carefully.
    };
  }, [pageUrl]);

  return (
    <div className="legacy-container" ref={containerRef}>
      {/* Legacy HTML will be injected here */}
    </div>
  );
}
