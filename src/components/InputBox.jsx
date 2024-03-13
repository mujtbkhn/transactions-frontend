export function InputBox({label, placeholder, onChange, name, type}) {
    return <div>
      <div className="py-2 text-sm font-medium text-left">
        {label}
      </div>
      <input name={name} type={type} onChange={onChange} placeholder={placeholder} className="w-full px-2 py-1 border rounded border-slate-200" />
    </div>
}