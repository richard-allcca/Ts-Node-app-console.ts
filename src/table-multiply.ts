import fs from 'fs';
import path from 'path';


export const tableOfMultiple = (
  multiplier: number, limit: number, showResult: boolean
) => {

  const headerMessage: string = `
  ================================
        Tabla del ${multiplier}
  ================================
  `;

  let index: number = 1;
  let result: string = `${headerMessage}\n`;

  do {
    result += `${multiplier} x ${index} = ${multiplier * index}\n`;
    index++;
  } while (index <= limit);

  try {
    showResult && console.log(result);

    const outputPath = path.join(__dirname, 'outputs');
    // recursive crea carpetas anidadas si eso indicas en output path
    fs.mkdirSync(outputPath, { recursive: true });

    fs.writeFileSync(path.join(outputPath, `tabla-${multiplier}.txt`), result);
  } catch (error: any) {
    console.log(error.message);
  }
};
