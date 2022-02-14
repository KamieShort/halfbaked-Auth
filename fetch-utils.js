const SUPABASE_URL = 'https://mjukwettrllpfumtwijm.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qdWt3ZXR0cmxscGZ1bXR3aWptIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ1MzEwMzMsImV4cCI6MTk2MDEwNzAzM30.VlBzi13QTeywkUF1tXU8yRtqiGbDi25VyV5V__o3rk4';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signupUser(email, password) {
    const resp = await client.auth.signUp({ email, password });
    console.log(resp);
}

// export async function signInUser(email, password) {}

// export async function checkAuth() {}

export async function redirectIfLoggedIn() {
    const user = await getUser();
    console.log(user);
    if (user) {
        location.replace('/other-page');
    }
}

// export async function logout() {}
