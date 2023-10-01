export default function LevelController(param: number): void {
  localStorage.setItem('level', param.toString());
}
