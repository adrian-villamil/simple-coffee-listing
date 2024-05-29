import { getCoffees } from "@/actions/coffee/get-coffees";
import { CardGrid, Header, TabContent, TabItem, TabList, Tabs } from "@/components";

export default async function HomePage() {
  const coffees = await getCoffees();

  return (
    <main className="bg-light-black rounded-xl py-20 max-w-[1100px] mx-auto mt-[150px] mb-32">
      <Header />
      <Tabs defaultValue="Tab 1">
        <TabList>
          <TabItem value="Tab 1">All Products</TabItem>
          <TabItem value="Tab 2">Availabel Now</TabItem>
        </TabList>
        <TabContent value="Tab 1">
          <CardGrid coffees={coffees} />
        </TabContent>
        <TabContent value="Tab 2">
          <CardGrid coffees={coffees.filter((coffee) => coffee.available)} />
        </TabContent>
      </Tabs>
    </main>
  );
}
