
import DashboardSummary from "@/components/DashboardSummary";
import BookList from "@/components/BookList";

export default function Home() {
  return (
    <div className="min-h-screen p-4 pb-20 gap-16 sm:p-20">
      <DashboardSummary />
      <BookList link="/bookshelf" heading="本棚" />

    </div>



  );
}
