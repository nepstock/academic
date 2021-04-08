<template>
  <div class="footer">
    <section class="relative bg-gray py-3">
      <b-container class="container-footer relative">
        <b-row class="d-flex align-items-end">
          <b-col sm="2">
            <img
              class="mb-3"
              width="80"
              src="../assets/img/uk_logo_site.png"
              alt="Kuepa"
            />
          </b-col>
          <b-col class="mb-3">
            <b-nav small vertical>
              <b-nav-item
                href="http://www.kuepa.com/docs/politica_reembolso_cancelacion.pdf"
                target="_blank"
                >Política de reembolso y cancelación.</b-nav-item
              >
              <b-nav-item v-b-modal.modal-1>Aviso de privacidad</b-nav-item>
            </b-nav>
          </b-col>
          <b-col sm="5">
            <p class="small">
              Copyright © 2021 Kuepa. Todos los derechos reservados. All rights
              reserved.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <b-modal id="modal-1" hide-footer hide-header>
      <h4 class="text-kuepa-secondary">Aviso de privacidad</h4>
      <p class="small">
        Con fundamento en los artículos 15 y 16 de la Ley Federal de Protección
        de Datos Personales en Posesión de Particulares hacemos de su
        conocimiento que KUEPA DE MEXICO S.A. DE C.V., con domicilio en Eje
        Central Lázaro Cárdenas Nro. 13, 2do piso Distrito Federal Delegación
        Cuauhtémoc., Col. Centro 06060 México es responsable de recabar sus
        datos personales, del uso que se le dé a los mismos y de su protección.
      </p>
      <p class="small">
        Su información personal será utilizada para las siguientes finalidades:
        proveer los servicios y productos que ha solicitado; notificarle sobre
        nuevos servicios o productos que tengan relación con los ya contratados
        o adquiridos; comunicarle sobre cambios en los mismos; elaborar estudios
        y programas que son necesarios para determinar hábitos de consumo;
        realizar evaluaciones periódicas de nuestros productos y servicios a
        efecto de mejorar la calidad de los mismos; evaluar la calidad del
        servicio que brindamos, y en general, para dar cumplimiento a las
        obligaciones que hemos contraído con usted.
      </p>
      <p class="small">
        Para las finalidades antes mencionadas, requerimos obtener los
        siguientes datos personales:
      </p>
      <ul class="small">
        <li>Nombre completo</li>
        <li>Teléfono fijo y/o celular</li>
        <li>Correo electrónico</li>
        <li>Dirección</li>
        <li>Nivel de escolaridad</li>
        <li>Nivel de ingreso</li>
      </ul>
      <p class="small">
        Es importante informarle que usted tiene derecho al Acceso,
        Rectificación y Cancelación de sus datos personales, a Oponerse al
        tratamiento de los mismos o a revocar el consentimiento que para dicho
        fin nos haya otorgado.
      </p>
      <p class="small">
        Para ello, es necesario que envíe la solicitud en los términos que marca
        la Ley en su Art. 29 a Ricardo Vazquez, responsable de nuestro
        Departamento de Protección de Datos Personales, ubicado en Eje Central
        Lázaro Cárdenas Nro. 13, 2do piso, Distrito Federal Delegación
        Cuauhtémoc., Col. Centro 06060 México, o bien, se comunique al teléfono
        5551309850 o vía correo electrónico a info@kuepa.com, el cual
        solicitamos confirme vía telefónica para garantizar su correcta
        recepción.
      </p>
      <p class="small">
        En caso de que no desee de recibir mensajes promocionales de nuestra
        parte, puede enviarnos su solicitud por medio de la dirección
        electrónica: info@kuepa.com. info@kuepa.com.
      </p>
      <p class="small font-weight-bold">
        Importante: Cualquier modificación a este Aviso de Privacidad podrá
        consultarlo en
        <a href="https://www.kuepa.com/mx#Privacidad" target="_blank"
          >www.kuepa.com/mx#Privacidad</a
        >
      </p>
      <b-row class="justify-content-end">
        <b-col sm="4">
          <b-button
            class="mt-3 button-kuepa"
            block
            @click="$bvModal.hide('modal-1')"
            >Entendido</b-button
          >
        </b-col>
      </b-row>
    </b-modal>
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
  font-weight: 700;
  padding: 0.2rem 1rem 0.2rem 0rem;
}

.container-footer {
  z-index: 2;
  margin-bottom: 10px;
}
</style>
