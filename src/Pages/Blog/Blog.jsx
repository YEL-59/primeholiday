
import Blog_Home_Section from './BlogComponent/Blog_Home_Section/Blog_Home_Section'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';

import BlogPage from './BlogComponent/BlogPage/BlogPage';



const Blog = () => {
    const breadcrumbItems = [
        { label: 'Home', href: '/' },

        { label: 'Blog ', href: '/blog' },
    ];
    return (
        <>
            <Blog_Home_Section />
            <Breadcrumb items={breadcrumbItems} />


            <BlogPage />





        </>
    )
}

export default Blog
