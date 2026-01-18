export type CardCategory =
  | "Funcional"
  | "Probado"
  | "Integrado"
  | "Documentado"
  | "Revisado"
  | "Desplegable"
  | "Personalizado";

export type ColumnType = "yes" | "not-yet" | "no" | "deck";

export interface DoDCard {
  id: number;
  category: CardCategory;
  title: string;
  description: string;
}

export const dodCards: DoDCard[] = [
  // Funcional (1-4)
  {
    id: 1,
    category: "Funcional",
    title: "Cumple con todos los criterios de aceptación",
    description:
      "Todos los criterios de aceptación definidos para el ítem fueron implementados y verificados.",
  },
  {
    id: 2,
    category: "Funcional",
    title: "La funcionalidad fue demostrada",
    description:
      "Se realizó una demostración de la funcionalidad implementada con stakeholders o miembros del equipo.",
  },
  {
    id: 3,
    category: "Funcional",
    title: "No hay defectos conocidos bloqueantes",
    description:
      "No existen bugs o defectos de severidad alta o crítica que impidan el uso de la funcionalidad.",
  },
  {
    id: 4,
    category: "Funcional",
    title: "La experiencia de usuario es aceptable",
    description:
      "La interfaz es usable, intuitiva y cumple con los estándares de UX/UI del equipo o producto.",
  },
  // Probado (5-9)
  {
    id: 5,
    category: "Probado",
    title: "Todas las pruebas unitarias pasaron",
    description:
      "Se ejecutaron las pruebas unitarias y todas pasaron exitosamente sin errores.",
  },
  {
    id: 6,
    category: "Probado",
    title: "Las pruebas de integración pasaron",
    description:
      "Se verificó que el ítem funciona correctamente con otros componentes o sistemas.",
  },
  {
    id: 7,
    category: "Probado",
    title: "Se realizaron pruebas manuales",
    description:
      "Se ejecutaron pruebas exploratorias o manuales para validar el comportamiento del ítem.",
  },
  {
    id: 8,
    category: "Probado",
    title: "La cobertura de código es adecuada",
    description:
      "El código nuevo cumple con el porcentaje mínimo de cobertura de pruebas acordado por el equipo.",
  },
  {
    id: 9,
    category: "Probado",
    title: "Se probó en diferentes escenarios",
    description:
      "Se validó el ítem en diferentes condiciones, navegadores, dispositivos o escenarios según corresponda.",
  },
  // Integrado (10-13)
  {
    id: 10,
    category: "Integrado",
    title: "El código está en la rama principal",
    description:
      "Todo el código del ítem fue integrado (merged) a la rama principal del repositorio.",
  },
  {
    id: 11,
    category: "Integrado",
    title: "No hay conflictos de integración",
    description:
      "El código se integró sin conflictos y no genera problemas con el trabajo de otros miembros del equipo.",
  },
  {
    id: 12,
    category: "Integrado",
    title: "El pipeline de CI/CD pasó exitosamente",
    description:
      "Todas las validaciones automáticas (build, tests, análisis estático) se ejecutaron correctamente.",
  },
  {
    id: 13,
    category: "Integrado",
    title: "Las dependencias están actualizadas",
    description:
      "Todas las librerías, frameworks o dependencias utilizadas están en versiones aprobadas y actualizadas.",
  },
  // Documentado (14-17)
  {
    id: 14,
    category: "Documentado",
    title: "El código está documentado",
    description:
      "El código incluye comentarios apropiados y documentación técnica donde sea necesario.",
  },
  {
    id: 15,
    category: "Documentado",
    title: "La documentación de usuario está actualizada",
    description:
      "Manuales, guías de usuario o documentación relevante fueron creados o actualizados según corresponda.",
  },
  {
    id: 16,
    category: "Documentado",
    title: "Las decisiones técnicas están registradas",
    description:
      "Decisiones arquitectónicas o técnicas importantes fueron documentadas (ADRs, wiki, etc.).",
  },
  {
    id: 17,
    category: "Documentado",
    title: "Los cambios están en el changelog",
    description:
      "Las modificaciones realizadas fueron registradas en el registro de cambios del producto.",
  },
  // Revisado (18-21)
  {
    id: 18,
    category: "Revisado",
    title: "El código pasó por revisión de pares",
    description:
      "Al menos otro miembro del equipo revisó y aprobó el código (code review).",
  },
  {
    id: 19,
    category: "Revisado",
    title: "Se aplicaron los estándares de código",
    description:
      "El código sigue las convenciones, guías de estilo y mejores prácticas acordadas por el equipo.",
  },
  {
    id: 20,
    category: "Revisado",
    title: "Se realizó análisis de seguridad",
    description:
      "Se revisaron aspectos de seguridad y se aplicaron las mejores prácticas correspondientes.",
  },
  {
    id: 21,
    category: "Revisado",
    title: "Se verificó el rendimiento",
    description:
      "Se validó que el ítem cumple con los requisitos de performance y no degrada el sistema.",
  },
  // Desplegable (22-25)
  {
    id: 22,
    category: "Desplegable",
    title: "Está listo para producción",
    description:
      "El ítem puede ser desplegado a producción sin requerir trabajo adicional.",
  },
  {
    id: 23,
    category: "Desplegable",
    title: "Las migraciones están preparadas",
    description:
      "Scripts de migración de base de datos u otros recursos están listos y probados si son necesarios.",
  },
  {
    id: 24,
    category: "Desplegable",
    title: "La configuración está documentada",
    description:
      "Cambios en configuración, variables de entorno o infraestructura están documentados.",
  },
  {
    id: 25,
    category: "Desplegable",
    title: "El plan de rollback está definido",
    description:
      "Existe un procedimiento claro para revertir los cambios en caso de problemas en producción.",
  },
];

export const categoryColors: Record<CardCategory, string> = {
  Funcional: "bg-blue-500",
  Probado: "bg-green-500",
  Integrado: "bg-purple-500",
  Documentado: "bg-yellow-500",
  Revisado: "bg-orange-500",
  Desplegable: "bg-red-500",
  Personalizado: "bg-gray-500",
};

export const categoryBorderColors: Record<CardCategory, string> = {
  Funcional: "border-blue-500",
  Probado: "border-green-500",
  Integrado: "border-purple-500",
  Documentado: "border-yellow-500",
  Revisado: "border-orange-500",
  Desplegable: "border-red-500",
  Personalizado: "border-gray-500",
};

export function shuffleCards(cards: DoDCard[]): DoDCard[] {
  const shuffled = [...cards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Category order for DoD
const categoryOrder: CardCategory[] = [
  "Funcional",
  "Probado",
  "Integrado",
  "Documentado",
  "Revisado",
  "Desplegable",
];

// Order cards by category, keeping cards within each category in their original order
export function orderCardsByCategory(cards: DoDCard[]): DoDCard[] {
  return [...cards].sort((a, b) => {
    return (
      categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category)
    );
  });
}
