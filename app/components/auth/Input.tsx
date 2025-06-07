import { Eye, EyeOff } from "lucide-react";

const Input = ({
  icon: Icon,
  type,
  placeholder,
  value,
  onChange,
  showPasswordToggle,
  showPassword,
  togglePasswordVisibility,
}: any) => (
  <div>
    <label className="block text-sm font-medium text-gray-300 my-2">
      {placeholder}
    </label>
    <div className="relative">
      <Icon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type={
          type === "password" && showPasswordToggle
            ? showPassword
              ? "text"
              : "password"
            : type
        }
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full pl-12 pr-12 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none"
      />
      {showPasswordToggle && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      )}
    </div>
  </div>
);

export default Input;
