export default function LevelCompleted(param: number[]): void {
  localStorage.setItem('completed', JSON.stringify(param));
}
