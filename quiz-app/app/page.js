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
      <main className="bg-gradient-to-b from-[#4A00E0] to-[#8E2DE2] text-white">
        <Homepage_First_Section />
        <div className='p-6'>
          <QuizListHomePage data={data} />
        </div>
      </main>
    </>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), 'database', 'quizList.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);

  return data;
}
