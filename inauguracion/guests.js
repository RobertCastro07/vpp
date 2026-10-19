// Lista de invitados. La clave es lo que va en el link:  /i/jhon-barco
// name: nombre que se muestra | title: tratamiento (Sr., Dra., Dr., Lcdo.) | code: código del pase
// spouse: true  → invitación para la persona y su esposo/a ("y Sra.") — el texto va en plural
// plural: true  → grupo de varias personas — el texto va en plural
// short: saludo completo cuando no sirve "título + primer nombre" (ej. un grupo)
window.GUESTS = {
  "jhon-barco": { name: "Jhon Barco", plus: true, code: "VPP-001" },
  "robert-castro": { name: "Robert Castro", plus: true, code: "VPP-002" },
  demo01: { name: "Julian", code: "DEMO" },

  "grupo-corcione": { name: "Grupo Corcione", title: "Srs.", short: "Srs. Grupo Corcione", plural: true, code: "VPP-003" },
  "valerio-goncalves": { name: "Valerio Goncalves", title: "Sr.", spouse: true, code: "VPP-004" },
  "mauricio-breton": { name: "Mauricio Bretón", title: "Sr.", spouse: true, code: "VPP-005" },
  "dra-estephany": { name: "Estephany", title: "Dra.", code: "VPP-006" },
  "dra-esther": { name: "Esther", title: "Dra.", code: "VPP-007" },
  "dra-silvia": { name: "Silvia", title: "Dra.", code: "VPP-008" },
  "sr-ricardo": { name: "Ricardo", title: "Sr.", spouse: true, code: "VPP-009" },
  "jorge-miranda": { name: "Jorge Miranda", title: "Sr.", spouse: true, code: "VPP-010" },
  "jerson-goti": { name: "Jersón Goti", title: "Dr.", spouse: true, code: "VPP-011" },
  "roberto-garcia": { name: "Roberto García", title: "Dr.", spouse: true, code: "VPP-012" },
  "hugo-garcia": { name: "Hugo García", title: "Lcdo.", spouse: true, code: "VPP-013" },
  "vanesa-miranda": { name: "Vanesa Miranda", title: "Sra.", code: "VPP-014" },
  "milagros-abad": { name: "Milagros Abad", title: "Sra.", code: "VPP-015" },
  "miguel-daubeterre": { name: "Miguel Daubeterre", title: "Sr.", spouse: true, code: "VPP-016" },
  "decio-barco": { name: "Decio Barco", title: "Sr.", spouse: true, code: "VPP-017" },
  "carlos-acosta": { name: "Carlos Acosta", title: "Sr.", spouse: true, code: "VPP-018" },
  "julian-acosta": { name: "Julián Acosta", title: "Sr.", spouse: true, code: "VPP-019" },
};
