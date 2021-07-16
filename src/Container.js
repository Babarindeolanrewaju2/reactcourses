import React, { useContext } from 'react';
import { CoursesContext } from './context.js';
function Container() {
  const {sortedCourses, filterCourses, handleSearch,search, filterCoursesByTags, recentPosts,uIUXDesignCount, scienceCount, creativeWritingCount, graphicDesignCount, fineArtsCount, businessAnalyticsount, marketingCount} = useContext(CoursesContext);
//   console.log(sortedCourses)
  return (
<div class="section section-padding mt-n10">
            <div class="container">
                <div class="row flex-row-reverse gx-10">
                    <div class="col-lg-8">
                        <div class="blog-wrapper">
                            <div class="row">
                            {sortedCourses && sortedCourses?.map((course) => (
                                <>
                                <div class="col-md-6">
                                    <div class="single-blog">
                                        <div class="blog-image">
                                            <a href="blog-details-left-sidebar.html"><img src={course.img} alt="Blog"/></a>
                                        </div>
                                        <div class="blog-content">
                                            <div class="blog-author">
                                                <div class="author">
                                                    <div class="author-thumb">
                                                        <a href="#"><img src="assets/images/author/author-01.jpg" alt="Author"/></a>
                                                    </div>
                                                    <div class="author-name">
                                                        <a class="name" href="#">{course.author}</a>
                                                    </div>
                                                </div>
                                                <div class="tag">
                                                    <a href="#">{course.category}</a>
                                                </div>
                                            </div>

                                            <h4 class="title"><a href="blog-details-left-sidebar.html">{course.title}</a></h4>

                                            <div class="blog-meta">
                                                <span> <i class="icofont-calendar"></i> {course.date}</span>
                                                <span> <i class="icofont-heart"></i> {course.likes}+ </span>
                                            </div>

                                            <a href="blog-details-left-sidebar.html" class="btn btn-secondary btn-hover-primary">Read More</a>
                                        </div>
                                    </div>
                                </div>
                                    </>
                                    ))}
                            </div>
                        </div>
                        {/*
                        <div class="page-pagination">
                            <ul class="pagination justify-content-center">
                                <li><a href="#"><i class="icofont-rounded-left"></i></a></li>
                                <li><a class="active" href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#"><i class="icofont-rounded-right"></i></a></li>
                            </ul>
                        </div>*/}
                    </div>
                    <div class="col-lg-4">
                        <div class="sidebar">

                            <div class="sidebar-widget widget-search">
                                <form action="#">
                                    <input type="text"value={search} onChange={e => handleSearch(e)} placeholder="Search here"/>
                                    <button><i class="icofont-search-1"></i></button>
                                </form>
                            </div>

                            <div class="sidebar-widget">
                                <h4 class="widget-title">Post Category</h4>

                                <div class="widget-category">
                                    <ul class="category-list">
                                        <li onClick={e => filterCourses("UI/UX Design")}><a href="#">UI/UX Design<span>({uIUXDesignCount })</span></a></li>
                                        <li onClick={e => filterCourses("Creative Writing")}><a href="#">Creative Writing <span>({creativeWritingCount})</span></a></li>
                                        <li onClick={e => filterCourses("Graphic Design")}><a href="#">Graphic Design <span>({graphicDesignCount})</span></a></li>
                                        <li onClick={e => filterCourses("Fine Arts")}><a href="#">Fine Arts <span>({fineArtsCount})</span></a></li>
                                        <li onClick={e => filterCourses("Business Analytics")}><a href="#">Business Analytics <span>({businessAnalyticsount})</span></a></li>
                                        <li onClick={e => filterCourses("Marketing")}><a href="#">Marketing <span>({marketingCount})</span></a></li>
                                        <li onClick={e => filterCourses("Science")}><a href="#">Science <span>({scienceCount})</span></a></li>
                                    </ul>
                                </div>
                            </div>
 
                            <div class="sidebar-widget">
                                <h4 class="widget-title">Recent Post</h4>

                                <div class="widget-post">
                                    <ul class="post-items">
                             {recentPosts && recentPosts?.map((post) => (
                                <>
                                        <li>
                                            <div class="single-post">
                                                <div class="post-thumb">
                                                    <a href="blog-details-left-sidebar.html"><img src={post.img} alt="Post"/></a>
                                                </div>
                                                <div class="post-content">
                                                    <h5 class="title"><a href="blog-details-left-sidebar.html">{post.title}</a></h5>
                                                    <span class="date"><i class="icofont-calendar"></i> {post.title}</span>
                                                </div>
                                            </div>
                                        </li>
                            </>
                                    ))}
                                    </ul>
                                </div>
                            </div>



                            <div class="sidebar-widget">
                                <h4 class="widget-title">Popular Tags</h4>

                                <div class="widget-tags">
                                    <ul class="tags-list">
                                        <li><a onClick={e => filterCoursesByTags(e.target.innerText)} href="#">Design</a></li>
                                        <li><a onClick={e => filterCoursesByTags(e.target.innerText)} href="#">Education</a></li>
                                        <li><a onClick={e => filterCoursesByTags(e.target.innerText)} href="#">Education</a></li>
                                        <li><a onClick={e => filterCoursesByTags(e.target.innerText)} href="#">Design</a></li>
                                        <li><a onClick={e => filterCoursesByTags(e.target.innerText)} href="#">Design</a></li>
                                        <li><a onClick={e => filterCoursesByTags(e.target.innerText)} href="#">Education</a></li>
                                        <li><a onClick={e => filterCoursesByTags(e.target.innerText)} href="#">Education</a></li>
                                        <li><a onClick={e => filterCoursesByTags(e.target.innerText)} href="#">Design</a></li>
                                    </ul>
                                </div>
                            </div>
 
                            <div class="sidebar-widget">
                                <h4 class="widget-title">Share Course:</h4>

                                <ul class="social">
                                    <li><a href="#"><i class="flaticon-facebook"></i></a></li>
                                    <li><a href="#"><i class="flaticon-linkedin"></i></a></li>
                                    <li><a href="#"><i class="flaticon-twitter"></i></a></li>
                                    <li><a href="#"><i class="flaticon-skype"></i></a></li>
                                    <li><a href="#"><i class="flaticon-instagram"></i></a></li>
                                </ul>
                            </div>

                        </div>


                    </div>
                </div>

            </div>
        </div>
  );
}

export default Container;
