<template>
  <div>
    <section class="bg-kuepa-prepa d-flex align-items-center">
      <b-container class="py-5">
        <b-row
          class="justify-content-end mt-5 pt-0 pt-md-5 d-flex align-items-center"
        >
          <b-col sm="6">
            <div class="banner mt-4 mt-sm-0 p-4">
              <h2 class="h4">
                Termina tus estudios de bachillerato estudiando
                <span class="text-kuepa">
                  100% en línea en tan solo 2 años.</span
                >
              </h2>
            </div>
          </b-col>
          <b-col sm="5" offset-sm="1">
            <FormKuepa />
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="py-5">
      <b-container>
        <h2 class="text-center mb-5">Ventajas de la Uk</h2>
        <b-row class="d-flex align-items-stretch">
          <b-col v-for="image in images" :key="image.alt" class="mb-4" sm="4">
            <CardImage :title="image.title" :text="image.text">
              <img :src="image.url" :alt="image.alt" />
            </CardImage>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="py-5 bg-gray">
      <b-container>
        <h2 class="text-center mb-5">Plan de estudios</h2>
        <b-row>
          <b-col sm="4" class="mb-3">
            <p class="lead font-weight-bold text-kuepa">1er Cuatrimestre</p>
            <ul>
              <li>Taller de lectura y redacción I</li>
              <li>Metodología de la investigación</li>
              <li>Ética I</li>
              <li>Matemáticas I</li>
              <li>Química I</li>
              <li>Informática I</li>
              <li>Inglés I</li>
            </ul>
          </b-col>
          <b-col sm="4" class="mb-3">
            <p class="lead font-weight-bold text-kuepa">2do Cuatrimestre</p>
            <ul>
              <li>Taller de lectura y redacción II</li>
              <li>Introducción a las Ciencias Sociales</li>
              <li>Ética II</li>
              <li>Matemáticas II</li>
              <li>Química II</li>
              <li>Informática II</li>
              <li>Inglés II</li>
            </ul>
          </b-col>
          <b-col sm="4" class="mb-3">
            <p class="lead font-weight-bold text-kuepa">3er Cuatrimestre</p>
            <ul>
              <li>Literatura I</li>
              <li>Historia de México I</li>
              <li>Ética II</li>
              <li>Matemáticas III</li>
              <li>Biología I</li>
              <li>Física I</li>
              <li>Inglés III</li>
              <li>Capacitación laboral</li>
            </ul>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="4" class="mb-3">
            <p class="lead font-weight-bold text-kuepa">4to Cuatrimestre</p>
            <ul>
              <li>Literatura II</li>
              <li>Historia de México II</li>
              <li>Ética III</li>
              <li>Matemáticas IV</li>
              <li>Biología II</li>
              <li>Física II</li>
              <li>Inglés IV</li>
              <li>Capacitación laboral</li>
            </ul>
          </b-col>
          <b-col sm="4" class="mb-3">
            <p class="lead font-weight-bold text-kuepa">5to Cuatrimestre</p>
            <ul>
              <li>Geografía</li>
              <li>Estructura Socioeconómica de México</li>
              <li>Capacitación laboral</li>
              <li>Optativas de Formación propedéutica</li>
            </ul>
          </b-col>
          <b-col sm="4" class="mb-3">
            <p class="lead font-weight-bold text-kuepa">6to Cuatrimestre</p>
            <ul>
              <li>Filosofía</li>
              <li>Historia Universal Contemporánea</li>
              <li>Ecología y medio ambiente</li>
              <li>Capacitación laboral</li>
              <li>Optativas de Formación propedéutica</li>
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
  data() {
    return {
      images: [
        {
          url: require('assets/img/modalidad-uk.jpg'),
          title: 'Modalidad 100% en línea',
          text:
            'Tú eliges, estudia 100% en línea, semipresencial en una de nuestras sedes.',
          alt: 'modalidad',
        },
        {
          url: require('assets/img/maestros-uk.jpg'),
          title: 'Profesores expertos',
          text:
            'Profesores egresados de las mejores universidades de México que conocen te formarán para que puedas continuar con tus estudios de forma exitosa',
          alt: 'maestros',
        },
        {
          url: require('assets/img/sep-uk.jpg'),
          title: 'RVOE oficiales',
          text: 'Todos nuestros programas cuentan con acreditación de la SEP.',
          alt: 'sep',
        },
        {
          url: require('assets/img/empresas-uk.jpg'),
          title: 'Respaldo Internacional',
          text:
            'Contamos con el respaldo de estas prestigiosas organizaciones internacionales comprometidas con la educación de calidad en las Américas.',
          alt: 'empresas',
        },
        {
          url: require('assets/img/vinculacion-uk.jpg'),
          title: 'Orientación Vocacional',
          text:
            'A través de Uk LAB te apoyamos en tu busqueda de universidad y la selección de tu carrera profesional',
          alt: 'vinculacion',
        },
        {
          url: require('assets/img/becas-uk.jpg'),
          title: 'Becas',
          text:
            'Nuestro programa de becas te ofrece una colegiatura mensual accesible, sin gastos ocultos ni sorpresas',
          alt: 'becas',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Kuepa - Preparatorias',
      'Timing-Allow-Origin': '*',
      meta: [
        {
          name: 'description',
          content:
            'Termina tus estudios de bachillerato estudiando 100% en línea en tan solo 2 años.',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Kuepa - Preparatorias',
        },
        { hid: 'og:image', name: 'og:image', content: '/uk.png' },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'Termina tus estudios de bachillerato estudiando 100% en línea en tan solo 2 años.',
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
