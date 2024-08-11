import AppLayout from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';
import HeroSection from '@/Components/Homepage/HeroSection';
import ServiceSection from '@/Components/Homepage/ServiceSection';
import FeatureStatus from '@/Components/Homepage/FeatureStatus';
import Feature from '@/Components/Homepage/Feature';
import Testimonial from '@/Components/Homepage/Testimonial';
import SearchSection from '@/Components/Homepage/SearchSection';

export default function Homepage({ auth, user, laravelVersion, phpVersion }) {

    return (
        <AppLayout>
            <Head title="Home" />
            <SearchSection />

        </AppLayout>
    );
}
