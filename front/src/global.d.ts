declare global {
  interface Window {
    versions: {
      getUsers: () => Promise<string[]>;
      isUserExist: (username: string) => Promise<boolean>;
      addUser: (username: string) => Promise<void>;
    };
  }
}

export {};
