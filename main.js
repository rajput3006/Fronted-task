document.addEventListener('DOMContentLoaded', () => {
                              let currentTestimonial = 0;
                              const testimonials = document.querySelectorAll('.testimonial-content');
                            
                              // Navigate testimonials
                              document.querySelector('.prev').addEventListener('click', () => {
                                  testimonials[currentTestimonial].style.display = 'none';
                                  currentTestimonial = (currentTestimonial === 0) ? testimonials.length - 1 : currentTestimonial - 1;
                                  testimonials[currentTestimonial].style.display = 'flex';
                              });
                            
                              document.querySelector('.next').addEventListener('click', () => {
                                  testimonials[currentTestimonial].style.display = 'none';
                                  currentTestimonial = (currentTestimonial === testimonials.length - 1) ? 0 : currentTestimonial + 1;
                                  testimonials[currentTestimonial].style.display = 'flex';
                              });
                            
                              // Initial display
                              testimonials.forEach((testimonial, index) => {
                                  testimonial.style.display = index === 0 ? 'flex' : 'none';
                              });
                            });
                            