import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        name: { label: "name", type: "text" },
        email: { label: "email", type: "password" },
      },
      async authorize(credentials, req) {
        const user : any = credentials;
        console.log(user);
        
        if (user) {
            return user; 
        } else {
          return null; 
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages:{
    signIn:"/register",
  },
  secret:"S79hjyt7jtyj987QSq697694JTY546DG"
};
