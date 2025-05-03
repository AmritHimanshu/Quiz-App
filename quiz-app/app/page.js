import fs from 'fs';
import path from 'path';
import Homepage_First_Section from '@/components/Homepage_First_Section';
import Header from '../components/Header';
import QuizListHomePage from '@/components/QuizListHomePage';

export default async function Home() {
  const data = await getData();
  return (
    <>
      <Header />
      <main className="bg-[#1A1A1A] text-[#E0E0E0]">
        <Homepage_First_Section />
        <div className='p-6'>
          <QuizListHomePage data={data} />
        </div>
      </main>
    </>
  );
}

// Fetching data from the database (json file)
async function getData() {
  const filePath = path.join(process.cwd(), 'database', 'quizList.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);

  return data;
}
