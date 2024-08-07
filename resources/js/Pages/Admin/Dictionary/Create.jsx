
import { useForm } from '@inertiajs/react';
import BreadcumComponent from '@/Components/Dashboard/BreadcumComponent';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputLabel from '@/Components/Form/InputLabel';
import Input from '@/Components/Form/Input';
import SubmitButton from '@/Components/Form/SubmitButton';


export default function Create({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        word: '',
        pronunciation: '',
        meaning: '',
        page_number: '',
        status: 1,
    });

    function submit(e) {
        e.preventDefault()
        // console.log(data);
        post(route('dictionary.store'));
        // console.log(errors);
    }

    return (
        <AuthenticatedLayout>
            <BreadcumComponent pageOne="Words" pageOneRoute="dictionary.index" />

            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                    <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                        Insert Word
                    </p>
                </div>
                <div className="p-4 md:p-5">
                    <div className=" px-2 py-2 sm:px-6 lg:px-4 mx-auto">
                        <form onSubmit={submit}>
                            <div>
                                <InputLabel isRequired={true} labelFor="Word" />
                                <Input id="word" type="text" name="word" value={data.word} autoComplete="word" placeholder="word" onChange={(e) => setData('word', e.target.value)} />
                                <p className="text-sm text-red-600 mt-2">{errors.word}</p>
                            </div>
                            <div>
                                <InputLabel isRequired={true} labelFor="Pronunciation" />
                                <Input id="pronunciation" type="text" name="pronunciation" value={data.pronunciation} autoComplete="pronunciation" placeholder="pronunciation" onChange={(e) => setData('pronunciation', e.target.value)} />
                                <p className="text-sm text-red-600 mt-2">{errors.pronunciation}</p>
                            </div>
                            <div>
                                <InputLabel isRequired={true} labelFor="Meaning" />
                                <Input id="meaning" type="text" name="meaning" value={data.meaning} autoComplete="meaning" placeholder="meaning" onChange={(e) => setData('meaning', e.target.value)} />
                                <p className="text-sm text-red-600 mt-2">{errors.meaning}</p>
                            </div>
                            <div>
                                <InputLabel isRequired={true} labelFor="Page Number" />
                                <Input id="page_number" type="text" name="page_number" value={data.page_number} autoComplete="page_number" placeholder="page_number" onChange={(e) => setData('page_number', e.target.value)} />
                                <p className="text-sm text-red-600 mt-2">{errors.page_number}</p>
                            </div>
                            <SubmitButton />
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
