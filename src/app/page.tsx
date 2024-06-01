import { getCoffees } from "@/actions/coffee/get-coffees";
import { CardGrid, Header, TabContent, TabItem, TabList, Tabs } from "@/components";

export default async function HomePage() {
  const allCoffees = await getCoffees();
  const availableCoffees = allCoffees.filter((coffee) => coffee.available);

  return (
    <main className="bg-light-black rounded-xl py-20 max-w-[1100px] mx-auto mt-[150px] mb-32">
      <Header />
      <Tabs defaultValue="all products">
        <TabList>
          <TabItem value="all products">All Products</TabItem>
          <TabItem value="available now">Available Now</TabItem>
        </TabList>
        <TabContent value="all products">
          <CardGrid coffees={allCoffees} />
        </TabContent>
        <TabContent value="available now">
          <CardGrid coffees={availableCoffees} />
        </TabContent>
      </Tabs>
    </main>
  );
}
