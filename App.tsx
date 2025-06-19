import { RoutesMain as Routes } from './src/routes/RoutesMain.tsx';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';


export function App () {
  useEffect(() => {
    async function prepare() {
      try {
        // Mantenha a splash screen visível enquanto o app carrega
        await SplashScreen.preventAutoHideAsync();
        // Simule uma tarefa de carregamento (ex.: carregar dados)
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
        // Esconda a splash screen
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  return (
    <div style={{ display:'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Routes />
    </div>
  );
}
