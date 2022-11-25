export default function mostrarAlerta(setState, state) {
  setState(!state)
  setTimeout(() => {
    setState(state);
  }, 2000);
}