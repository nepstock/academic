<template>
  <div class="footer">
    <section class="relative bg-blue py-5">
      <b-container class="container-footer relative">
        <b-row class="justify-content-center">
          <b-col sm="3">
            <b-nav small vertical class="text-center">
              <b-nav-item to="/">Academic</b-nav-item>
              <b-nav-item to="/privacidad">Aviso de privacidad</b-nav-item>
              <b-nav-item to="/terminos-y-condiciones"
                >Términos y condiciones</b-nav-item
              >
              <b-nav-item
                href="https://pruebas.ignis.digital/academic/"
                target="_blank"
                >Blog</b-nav-item
              >
              <b-nav-item
                href="https://www.facebook.com/academicmexico"
                target="_blank"
                >Síguenos en Facebook</b-nav-item
              >
            </b-nav>
          </b-col>
        </b-row>
      </b-container>
      <div class="square-footer"></div>
    </section>
    <section class="bg-black py-3">
      <b-container>
        <p class="small text-white text-center mb-0">
          2021 pixel dynamic<br />
          Todos los derechos reservados.<br />
          Al usar este sitio aceptas nuestra política de privacidad así como
          nuestros Terminos y condiciones
        </p>
      </b-container>
    </section>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.footer {
  overflow: hidden;
}

.nav-link {
  color: #fff !important;
}

.container-footer {
  z-index: 2;
}
.square-footer {
  z-index: 1;
  position: absolute;
  top: -50px;
  left: 50px;
  width: 200px;
  height: 200px;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#2336b6),
    to(rgba(31, 38, 103, 0.9))
  );
  background: linear-gradient(to right, #2336b6, rgba(31, 38, 103, 0.9));
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-transition: all 250ms ease-out;
  transition: all 250ms ease-out;
}
</style>
