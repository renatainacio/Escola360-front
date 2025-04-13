import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
// import api from "../services/Api";

export default function SignUp() {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return alert("As senhas precisam ser iguais.");
    }

    setLoading(true);

    // Simula cadastro mockado
    setTimeout(() => {
      const fakeUser = {
        name: formData.name,
        email: formData.email,
        token: "fake-token-123"
      };
      signIn(fakeUser);
      navigate("/painel-aluno");
      setLoading(false);
    }, 1000);

    // Chamada backend
    // api.post("/auth/signup", formData)
    //   .then(res => {
    //     signIn(res.data);
    //     navigate("/painel-aluno");
    //   })
    //   .catch(err => {
    //     alert("Erro no cadastro: " + err.response.data);
    //   })
    //   .finally(() => setLoading(false));
  }

  return (
    <div className="flex items-start justify-center min-h-screen pt-8 bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Cadastrar-se</h1>

        <input
          type="text"
          name="name"
          placeholder="Nome completo"
          value={formData.name}
          onChange={handleChange}
          disabled={loading}
          required
          className="w-full p-2 mb-4 border rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          disabled={loading}
          required
          className="w-full p-2 mb-4 border rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={formData.password}
          onChange={handleChange}
          disabled={loading}
          required
          className="w-full p-2 mb-4 border rounded"
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirme a senha"
          value={formData.confirmPassword}
          onChange={handleChange}
          disabled={loading}
          required
          className="w-full p-2 mb-6 border rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>

        <p className="mt-4 text-sm text-center">
          Já tem uma conta?{' '}
          <Link to="/signin" className="text-blue-600 hover:underline">
            Entrar
          </Link>
        </p>
      </form>
    </div>
  );
}
