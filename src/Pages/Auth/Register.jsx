import { use } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import { useNavigate } from "react-router";

const Register = () => {
  const { register, updateUser, setUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleSubmite = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    register(email, password)
      .then((res) => {
        updateUser(displayName, photoURL).then(() => {
          setUser(res.user), alert("register succesfully done"), navigate("/");
        });
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-slate-50 px-4">
      <form
        onSubmit={handleSubmite}
        className="w-full max-w-md bg-white rounded-2xl p-6 shadow-lg border border-slate-100"
        aria-label="register form"
      >
        <div className="text-center mb-4">
          <div className="mx-auto w-14 h-14 rounded-lg bg-gradient-to-br from-sky-600 to-violet-600 flex items-center justify-center text-white font-semibold shadow-md">
            CC
          </div>
          <h1 className="mt-3 text-xl font-semibold text-slate-900">
            Create an account
          </h1>
          <p className="text-sm text-slate-500">
            Start reporting issues and tracking progress
          </p>
        </div>

        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-slate-700">
              Full name
            </span>
            <input
              name="name"
              className="mt-1 block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-200"
              placeholder="Your full name"
              autoComplete="name"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Photo</span>
            <input
              name="photo"
              type="text"
              className="mt-1 block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-200"
              placeholder="URL"
              autoComplete="Photo"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Email</span>
            <input
              name="email"
              type="email"
              className="mt-1 block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-200"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Password</span>
            <input
              name="password"
              type="password"
              className="mt-1 block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-200"
              placeholder="Create a password"
              autoComplete="new-password"
              required
            />
          </label>
        </div>

        <div className="mt-6 flex items-center justify-center">
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-sky-600 text-white font-semibold hover:bg-sky-700 transition"
          >
            Create account
          </button>
        </div>

        <p className="mt-3 text-sm text-center text-slate-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-sky-600 font-semibold hover:underline"
          >
            Sign in
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
