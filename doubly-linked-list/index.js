class DoublyLinkedListNode {
  constructor(value = null, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  head = null;
  tail = null;
  length = 0;
  constructor() {}

  add(value) {
    const node = new DoublyLinkedListNode(value);

    if (this.head === null) this.head = node;
    else {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;
    this.length++;
  }

  remove(value) {
    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        break;
      }
      current = current.next;
    }
    if (current !== null) {
      if (current.next !== null) {
        current.next.prev = current.prev;
      } else {
        this.tail = current.prev;
      }

      if (current.prev !== null) {
        current.prev.next = current.next;
      } else {
        this.head = current.next;
      }
      this.length--;
      return true;
    }
    return false;
  }

  forEach(callback) {
    let current = this.head;
    while (current !== null) {
      callback(current.value);
      current = current.next;
    }
  }

  find(callback) {
    let current = this.head;
    while (current !== null) {
      if (callback(current.value)) {
        return current.value;
      }
      current = current.next;
    }
    return null;
  }
}

const fs = require("fs");
const path = require("path");

const doublyLinkedList = new DoublyLinkedList();

const length = 1000000;

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const array = Array.from({ length }, () => randomInt(0, length));

for (var i = 0; i < array.length; i++) {
  doublyLinkedList.add(array[i]);
}

const testResults = [];

function test(label, operation) {
  const t1 = performance.now();
  operation();
  const t2 = performance.now();
  const time = (t2 - t1).toFixed(4);
  testResults.push({ label, time: parseFloat(time), unit: "ms" });
}

function writeTestResultsToFile(filename = "test-results.txt") {
  try {
    let content = "Результаты тестирования\n";
    content += "=".repeat(50) + "\n\n";
    content += `Дата и время: ${new Date().toLocaleString()}\n`;
    content += `Количество элементов: ${length}\n\n`;

    if (testResults.length === 0) {
      content += "Нет результатов тестирования.\n";
    } else {
      content += "Результаты:\n";
      content += "-".repeat(50) + "\n";
      testResults.forEach((result, index) => {
        content += `${index + 1}. ${result.label}: ${result.time} ${
          result.unit
        }\n`;
      });
      content += "-".repeat(50) + "\n\n";

      // Статистика по типам тестов
      const nativeResults = testResults.filter((r) => r.label === "native");
      const customResults = testResults.filter((r) => r.label === "custom");

      if (nativeResults.length > 0 && customResults.length > 0) {
        const nativeAvg =
          nativeResults.reduce((sum, r) => sum + r.time, 0) /
          nativeResults.length;
        // не учтены накладные расходы на преобразование массива в двусвязный список
        const customAvg =
          customResults.reduce((sum, r) => sum + r.time, 0) /
          customResults.length;

        content += "Статистика по типам:\n";
        content += "-".repeat(50) + "\n";
        content += `Native (среднее): ${nativeAvg.toFixed(4)} ms\n`;
        content += `Custom (среднее): ${customAvg.toFixed(4)} ms\n`;

        if (customAvg < nativeAvg) {
          const speedup = (nativeAvg / customAvg).toFixed(2);
          content += `Custom быстрее Native в ${speedup}x раз\n`;
        } else if (nativeAvg < customAvg) {
          const speedup = (customAvg / nativeAvg).toFixed(2);
          content += `Native быстрее Custom в ${speedup}x раз\n`;
        } else {
          content += `Custom и Native работают одинаково быстро\n`;
        }
        content += "-".repeat(50) + "\n\n";
      }

      if (testResults.length >= 2) {
        const times = testResults.map((r) => r.time);
        const minTime = Math.min(...times);
        const maxTime = Math.max(...times);
        const ratio = (maxTime / minTime).toFixed(2);
        content += `Самый быстрый: ${minTime} ms\n`;
        content += `Самый медленный: ${maxTime} ms\n`;
        content += `Разница: ${ratio}x\n`;
      }
    }

    content += "\n" + "=".repeat(50) + "\n";

    const filePath = path.join(__dirname, filename);
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`\nРезультаты сохранены в файл: ${filePath}`);
  } catch (error) {
    console.error(`Ошибка при записи файла: ${error.message}`);
  }
}

for (var i = 0; i < 100; i++) {
  test("native", () =>
    array.find((item) => item === 500000 || item === 400000 || item === 1));
  test("custom", () =>
    doublyLinkedList.find(
      (item) => item === 500000 || item === 400000 || item === 1
    ));
}

writeTestResultsToFile();
