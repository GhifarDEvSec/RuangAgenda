function App() {
  return (
    <main>
      <h1>{import.meta.env.VITE_APP_NAME}</h1>
      <p>Nama Mahasiswa: {import.meta.env.VITE_STUDENT_NAME}</p>
      <p>NIM: {import.meta.env.VITE_STUDENT_NIM}</p>
    </main>
  )
}

export default App
