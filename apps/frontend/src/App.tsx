import { ShoppingItemForm } from './components/shoppingItemForm';
import { Header } from './components/header';
import { ShoppingList } from './components/shoppingList';
import { Toaster } from './components/ui/sonner';

export const App = () => {
  return (
    <main className="mt-10 flex h-screen w-screen flex-col items-center justify-start gap-8 text-white">
      <Header />
      <ShoppingItemForm />
      <ShoppingList />
      <Toaster />
    </main>
  );
};
