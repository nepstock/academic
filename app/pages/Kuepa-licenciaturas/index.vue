<template>
  <div>
    <section class="bg-kuepa d-flex align-items-center">
      <b-container class="py-5">
        <b-row class="justify-content-end mt-5 pt-0 pt-md-5">
          <b-col sm="5">
            <FormKuepa />
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="6">
            <div class="banner mt-4 mt-sm-0 p-4">
              <h2 class="h3">
                <span class="text-kuepa"
                  >Obtén tu Licenciatura en solo 2 años y 8 meses</span
                >
                en línea
              </h2>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="px-3 px-sm-5 py-4 bg-smoke text-white text-center">
      <b-container>
        <b-row>
          <b-col>
            <h3 class="h4">Estudia mientras persigues tus sueños</h3>
            <p class="lead">
              Con el formato mixto de las Licenciaturas de la Uk podrás combinar
              tus estudios con otras actividades. Persigue tus sueños mientras
              estudias utilizando cualquier dispositivo móvil o nuestra app y
              asiste una vez por semana a sesiones presenciales.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="py-5">
      <b-container>
        <b-row class="d-flex align-items-center mb-5">
          <b-col sm="6">
            <img class="mb-3" src="../../assets/img/uk.png" alt="Kuepa" />
          </b-col>
          <b-col sm="6">
            <h3 class="h5 mb-4 text-kuepa-secondary">
              Estudiar tú Licenciatura Ejecutiva en la Uk tiene muchas ventajas:
            </h3>
            <ul>
              <li>Plataforma accesible las 24 hs y acceso vía App</li>
              <li>Tutor individual disponible vía chat o teléfono</li>
              <li>3 años de duración (41 materias)</li>
              <li>Prácticas profesionales</li>
              <li>Titulación automática</li>
              <li>Profesores con experiencia directiva en empresas líderes</li>
              <li>Sesiones Ejecutivas presenciales</li>
            </ul>
          </b-col>
        </b-row>
        <b-row class="d-flex align-items-center">
          <b-col sm="6">
            <img class="mb-3" src="../../assets/img/carreers.png" alt="Kuepa" />
          </b-col>
          <b-col sm="6">
            <h3 class="h5 mb-4 text-kuepa-secondary">
              Estudiar tú Licenciatura Ejecutiva en la Uk tiene muchas ventajas:
            </h3>
            <ul>
              <li>
                <a
                  href="http://kuepa.com/mx/oferta/administracion/adnetwork/pixel"
                  target="_blank"
                  >Administración de empresas</a
                >
              </li>
              <li>
                <a
                  href="http://kuepa.com/mx/oferta/derecho/adnetwork/pixel"
                  target="_blank"
                  >Derecho</a
                >
              </li>
              <li>
                <a
                  href="http://kuepa.com/mx/oferta/marketing/adnetwork/pixel"
                  target="_blank"
                  >Marketing digital</a
                >
              </li>
              <li>
                <a
                  href="https://www.kuepa.com/mx/oferta/contabilidad/adnetwork/pixel"
                  target="_blank"
                  >Contabilidad</a
                >
              </li>
              <li>
                <a
                  href="https://www.kuepa.com/mx/oferta/finanzas/adnetwork/pixel"
                  target="_blank"
                  >Finanzas</a
                >
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>
<script>
export default {
  layout: 'landing',
  head() {
    return {
      title: 'Kuepa - Licenciaturas',
      'Timing-Allow-Origin': '*',
      meta: [
        {
          name: 'description',
          content: 'Somos la Universidad más innovadora de México. ',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Kuepa - Licenciaturas',
        },
        { hid: 'og:image', name: 'og:image', content: '/uk.png' },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Somos la Universidad más innovadora de México. ',
        },
        { hid: 'og:site_name', name: 'og:site_name', content: 'Academic' },
      ],
    }
  },
}
</script>
<style scoped>
.banner {
  background: rgba(255, 255, 255, 0.8);
}
</style>
