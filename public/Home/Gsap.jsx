import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export function Gsap(){
    
    useGSAP(
        () => {
            const timer = setTimeout(() => {
                gsap.fromTo("#scrollBar_line1", {
                  scaleX: 0.07
                },
                {
                  scrollTrigger: {
                    trigger: "#sectionExperience",
                    scrub: 2,
                    pin: true,
                    start: "top top",
                    end: "+=4900",
                    // markers: true,
                  },
                  scaleX: 0.25,
                  transformOrigin: "left center",
                  ease: "none"
                });
                
              }, 7900); 
              return () => clearTimeout(timer);  
        }
    )
    
    useGSAP(
        () => {
            const timer = setTimeout(() => {
                gsap.to("#experienceContent", {
                  scrollTrigger: {
                    scrub: true,
                    pin: true,
                    start: "top top",
                    end: "+=100",
                    // markers: true,
                  },
                  backdropFilter: "blur(10px)",
                  ease: "none"
                });
                
              }, 7900); 
              return () => clearTimeout(timer);  
        }
    )
    
    useGSAP(
        () => {
            const timer = setTimeout(() => {
                gsap.to("#experienceText", {
                  scrollTrigger: {
                    scrub: true,
                    pin: true,
                    start: "top top",
                    end: "+=50",
                    // markers: true,
                  },
                  opacity: 0,
                  ease: "none"
                });
                
              }, 7900); 
              return () => clearTimeout(timer);  
        }
    )
    
    useGSAP(
        () => {
            gsap.fromTo("#sectionLesVins", {
                x:"-=100vw",
                y:"+=50vh",
                opacity:0,
            },{
                scrollTrigger: {
                    trigger: "#sectionLesVins",
                    toggleActions: "restart none none reverse",
                    start: "top top",
                    end:"+=1000",
                    // markers: true,
                },
                opacity:1,
                ease: "none"
            });

            let horizontalSections = gsap.utils.toArray(".horizontal .panel");
            gsap.to(horizontalSections, {
            xPercent: -100 * (horizontalSections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: '.horizontal',
                pin: true,
                scrub: 1,
                end: "+=3500",
                // markers: true,
            }
            });
        }
    )
    
    useGSAP(
      () => {
        gsap.fromTo('#title_devientLieu',{
          scale:1,
        },{
          scrollTrigger:{
            trigger:"#sectionLesVins",
            toggleActions: "restart none none reverse",
            start:'100% 98%',
            end:'bottom',
            markers: {startColor: "white", endColor: "white",}
          },
          scale:30,
          ease: 'expo.in',
          opacity: 0,
        });
      }
    )
  
    useGSAP(
      () => {
        gsap.to('#sectionLesVins',{
          scrollTrigger:{
            trigger:"#sectionLesVins",
            toggleActions: "restart none none reverse",
            start:'100% 98%',
            end:'bottom',
            markers: {startColor: "blue", endColor: "blue",}
          },
          overflow: "hidden",
        });
      }
    )
    
    useGSAP(
      () => {
        gsap.fromTo('#secondTitle_devientLieu',{
          opacity:1,
        },{
          scrollTrigger:{
            trigger:"#sectionLesVins",
            toggleActions: "restart none none reverse",
            start:'100% 98%',
            end:'bottom',
            markers: {startColor: "red", endColor: "red",}
          },
          ease: 'expo.in',
          opacity: 0,
        });
      }
    )
}