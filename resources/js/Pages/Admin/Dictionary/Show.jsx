import BreadcumComponent from '@/Components/Dashboard/BreadcumComponent';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';


export default function Index({ auth, word }) {
    return (
        <AuthenticatedLayout>
            <div className="flex justify-between items-center">
                <BreadcumComponent pageOne="Word" pageOneRoute="dictionary.index" />
                {/* <ButtonPlus routeName="" /> */}
            </div>



            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">


                            <div  className='p-12 card'>
                                <h1> S.N : {word.id}</h1>
                                <h1> Word:  {word.word}</h1>
                                <h1> pronunciation:  {word.pronunciation}</h1>
                                <p>  Meaning :{ word.meaning}</p>
                                <p>  Email :{ word.page_number}</p>
                                <p>  Author :{word.author.name}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </AuthenticatedLayout>
    );
}
