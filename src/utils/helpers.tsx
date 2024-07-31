export const calculateTotal = (formData: Record<string, number>, id: number) => {
      const rent = formData[`rent-${id}`] || 0;
      const equipment = formData[`equipment-${id}`] || 0;
      const honoraria = formData[`honoraria-${id}`] || 0;
      const usagefees = formData[`usagefees-${id}`] || 0;
      const travelexpenses = formData[`travelexpenses-${id}`] || 0;
      const commissionfees = formData[`commissionfees-${id}`] || 0;
      const servicecosts = formData[`servicecosts-${id}`] || 0;
      const supplycosts = formData[`supplycosts-${id}`] || 0;
      const rawmaterialcosts = formData[`rawmaterialcosts-${id}`] || 0;
    
      return rent + equipment + honoraria + usagefees + travelexpenses + commissionfees + servicecosts + supplycosts + rawmaterialcosts;
    };
    