

import 'tw-elements';

function Carrusel (){
return(
    <>
     <div class="pt-16 bg-black sm:pt-36">
        <div class=" container m-auto">
            <div id="carouselDarkVariant" class="carousel slide carousel-fade carousel-dark " data-bs-ride="carousel">
              
                <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button data-bs-target="#carouselDarkVariant" data-bs-slide-to="0" class=" hidden  active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button class="hidden " data-bs-target="#carouselDarkVariant" data-bs-slide-to="1"
                        aria-label="Slide 1"></button>
                    <button class="hidden" data-bs-target="#carouselDarkVariant" data-bs-slide-to="2"
                        aria-label="Slide 1"></button>
                </div>

              
                <div class="carousel-inner relative w-full overflow-hidden">
                  
                    <div class="carousel-item active relative float-left w-full">
                        <img src='./heder2.jpg'class="block w-full" alt="Motorbike Smoke" />
                        <div class="carousel-caption hidden absolute text-center">
                            <h5 class="text-xl">First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>

                   
                    

                   
                    
                </div>
              

            

                

            </div>
        </div>
    </div>

    </>
)

}
export default Carrusel