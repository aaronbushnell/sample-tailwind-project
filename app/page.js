export default function Home() {
  return (
    <div>
      <h1 className="h1">I don't work (class: h1)</h1>
      <h1 className="hz">I do work (class: hz)</h1>
      <h1 className="hz1">I don't work (class: hz1)</h1>
      <h1 className="hz1z">I don't work (class: hz1z)</h1>
      <h1 className="h-1">I work, but have odd line-height issues (class: h-1)</h1>
    </div>
  );
}
