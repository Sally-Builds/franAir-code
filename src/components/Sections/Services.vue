<template>
  <div class="row q-pt-md" id="services">
        <div class="col-12 text-center">
          <span class="bon text-h4 heading">Our Services</span>
        </div>
        <div class="col-12 col-sm-4 q-pa-lg">
                <q-avatar rounded class="q-pl-md">
                    <img src="https://www.pngitem.com/pimgs/m/125-1251515_file-hexagonal-tiling-svg-grid-hexagon-texture-png.png" height="20px">
                </q-avatar>
              <span class="text-h5 q-pa-lg my-font">Tiling</span>
              <div>
                <p class="text-caption1 q-pa-md bon">
                  We are Fully experienced in all aspects of internal & external tiling procedures,
                   from preparation & fixing to cleaning & restoration. 
                   We specialise in all types of tiling, 
                   different materials ranging from ceramics, metal, glass, 
                   porcelain & natural stone - slate, limestone, travertine, granite & marble. <br>
                  Enhance your kitchen or your bathroom with our stylish 
                  tile designs or allow us to turn your designs into reality. Our fully 
                  trained professional tile fixers can help with advice on designs, colours, enhancing, restoration, sealing & 
                  polishing.</p>
              </div>
          </div>
          <div class="col-12 col-sm-4 q-pa-lg">
                <q-avatar rounded class="q-pl-md">
                    <img src="data:image/jpeg;base64,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" height="20px">
                </q-avatar>
              <span class="text-h5 q-pa-lg my-font">Aluminum Profiling</span>
              <div>
                <p class="text-caption1 q-pa-md bon">we are one of the most advanced companies in
                   the design and production of architectural aluminium systems
                   Aluminium profiles for doors and windows form an important component
                    of good and robust building construction lending safety and beauty to buildings.
                    Aluminum scrap, casting of Aluminum logs, cutting of Aluminum billet, power coating etc down to packaging
                   </p>
              </div>
          </div>
          <div class="col-12 col-sm-4 q-pa-lg">
                <q-avatar rounded class="q-pl-md">
                    <img src="https://www.pinclipart.com/picdir/big/418-4188128_icon-basement-false-ceiling-icon-clipart.png" height="20px">
                </q-avatar>
              <span class="text-h5 q-pa-lg my-font">Plaster of Paris(POP) installation</span>
              <div>
                <p class="text-caption1 q-pa-md bon">We are one of the leading suppliers &
                   distributors of Gypsum Plaster Products in Nigeria, popularly known as “Plaster Of Paris”. 
                   Since our opening in 2014 we have been
                   in the business of not just supplying and distribution, but also installation of the highest quality P.O.P. 
                   designs.
                   We aim to provide our clients with the best services unique to their specific needs at all times.</p>
              </div>
          </div>
          <div class="col-12 col-sm-4 q-pa-lg">
                <q-avatar rounded class="q-pl-md">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQalCXP8KVBQ2Pf9CUVEwXRSwjAQSlfLefhVw&usqp=CAU" height="20px">
                </q-avatar>
              <span class="text-h5 q-pa-lg my-font">Painting</span>
              <div>
                <p class="text-caption1 q-pa-md bon">
                  We are designed for expert painting services for the home and commercial buildings. 
                  We are growing to become one of the best domestic paint market leaders in South-East Nigeria
                  We always use only the highest quality product, 
                  highly experienced professionals who are passionate about 
                  providing the most helpful and convenient service..</p>
              </div>
          </div>
          <div class="col-12 col-sm-4 q-pa-lg">
                <q-avatar rounded class="q-pl-md">
                    <img src="data:image/png;base64,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" height="20px">
                </q-avatar>
              <span class="text-h5 q-pa-lg my-font">Cleaning Services</span>
              <div>
                <p class="text-caption1 q-pa-md bon">
                  We specialized in the art of home, industrial, office, 
                  residential and environmental cleaning.
                  We are committed to providing tailor 
                  made cleaning solutions to our respective clients to suit their needs.
                  We strive to achieve the highest standards of Quality, 
                  Health, Safety and Environment throughout our service delivery. 
                  Nothing is more important to us than the health and safety of our 
                  employees and the people who use our services.</p>
              </div>
          </div>
          <div class="col-12 col-sm-4 q-pa-lg">
                <q-avatar rounded class="q-pl-md">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVoux5VKT6H_O5f6XbnAR6k_K_kU1NZtutRQ&usqp=CAU" height="20px">
                </q-avatar>
              <span class="text-h5 q-pa-lg my-font">Stainless Rails installation</span>
              <div>
                <p class="text-caption1 q-pa-md bon">We tackle the most demanding stainless steel staircase, 
                  architectural railing and handrail designs. Our customer welded guardrails, 
                  handrails and curved railings are fabricated from various sizes of pipe, 
                  tube and flat bar material. We install - 
                  Balcony Glass and Steel Rails, 
                  Stainless Steel Swimming Pool Rails, 
                  Stainless Steel Glass Stair Rails, 
                  Stainless Steel Stair Rail, Glass Stainless Steel Rails</p>
              </div>
          </div>
      </div>
</template>

<script>
export default {

}
</script>

<style>
#services {
    padding: 100px 0;
  }
</style>