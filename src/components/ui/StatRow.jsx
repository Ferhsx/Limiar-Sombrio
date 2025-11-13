export default function StatRow({ label, value, onIncrease, onDecrease }) {
  return (
    <div className="flex items-center justify-between p-2 bg-slate-800 rounded">
      <span className="font-bold">{label}</span>
      <div className="flex items-center space-x-4">
        <button type="button" onClick={onDecrease} className="bg-red-800 rounded-full w-8 h-8 text-lg font-bold">-</button>
        <span className="text-2xl font-mono w-8 text-center">{value}</span>
        <button type="button" onClick={onIncrease} className="bg-green-800 rounded-full w-8 h-8 text-lg font-bold">+</button>
      </div>
    </div>
  );
}