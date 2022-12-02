import { createClient } from '@supabase/supabase-js'
import useAuthUser from 'src/composables/UseAuthUser'

const supabaseUrl = 'https://xtmqjziwuezjaupttadd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0bXFqeml3dWV6amF1cHR0YWRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAwMDQ5ODMsImV4cCI6MTk4NTU4MDk4M30.JNdzvzVB5F1kDeZrbY6pPU-RDah5n0qkfgofOB46MJE'
const supabase = createClient(supabaseUrl, supabaseKey)

supabase.auth.onAuthStateChange((event, session) => {
  const { user } = useAuthUser()

  user.value = session?.user || null
})

export default function useSupabase () {
  return { supabase }
}
