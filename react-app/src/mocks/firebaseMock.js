// This is a minimal mock for Firebase designed to intercept calls from the legacy codebase.

const demoFeedsData = [
  {
    id: "post1",
    authorName: "Demo Bakery",
    content: "We just baked fresh croissants!",
    imageUrl: "https://via.placeholder.com/600x400",
    likes: 12,
    timestamp: Date.now()
  },
  {
    id: "post2",
    authorName: "Coffee Shop",
    content: "New latte art specials today.",
    imageUrl: "https://via.placeholder.com/600x400",
    likes: 34,
    timestamp: Date.now() - 3600000
  }
];

window.firebase = {
  initializeApp: () => console.log("[MOCK] Firebase initialized"),
  firestore: () => ({
    collection: (colName) => ({
      where: () => ({
        orderBy: () => ({
          limit: () => ({
            onSnapshot: (callback) => {
              console.log(`[MOCK] Firestore snapshot for ${colName}`);
              // Mock returning data
              const snapshot = {
                docs: demoFeedsData.map(data => ({
                  id: data.id,
                  data: () => data,
                }))
              };
              callback(snapshot);
              return () => console.log("[MOCK] Unsubscribe"); // Unsubscribe function
            },
            get: async () => ({
              docs: demoFeedsData.map(data => ({
                id: data.id,
                data: () => data,
              }))
            })
          })
        })
      }),
      doc: (docId) => ({
        get: async () => ({
          exists: true,
          data: () => ({ name: "Demo User", role: "customer" })
        }),
        onSnapshot: (callback) => {
          callback({ exists: true, data: () => ({ name: "Demo User" }) });
          return () => {};
        }
      })
    })
  }),
  auth: () => ({
    onAuthStateChanged: (callback) => {
      console.log("[MOCK] Auth state changed to Demo User");
      callback({ uid: "demo-user-123", email: "demo@example.com" });
    },
    signInWithEmailAndPassword: async () => ({ user: { uid: "demo-user-123" } }),
    signOut: async () => console.log("[MOCK] Signed out")
  })
};

console.log("Firebase mock loaded.");
