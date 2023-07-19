import "react-native-url-polyfill/auto"
import * as SecureStore from "expo-secure-store"
import { createClient } from "@supabase/supabase-js"

const ExpoSecureStoreAdapter = {
  getItem: (key: string) => {
    return SecureStore.getItemAsync(key)
  },
  setItem: (key: string, value: string) => {
    SecureStore.setItemAsync(key, value)
  },
  removeItem: (key: string) => {
    SecureStore.deleteItemAsync(key)
  },
}

const supabaseUrl = "https://qdqnajjkprvcqpialgpu.supabase.co"
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkcW5hamprcHJ2Y3FwaWFsZ3B1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk3NTk2NzcsImV4cCI6MjAwNTMzNTY3N30.ctYQSLREEVznTySP9EQn98UNIoM3f9mr0lus577gMLQ"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ExpoSecureStoreAdapter as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})
