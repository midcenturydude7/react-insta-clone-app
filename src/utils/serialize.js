import { Text } from "slate";
import escapeHTML from "escape-html";

const serialize = node => {
    if (Text.isText(node)) {
        return escapeHTML(node.text)
    }

  const children = node.children.map(n => serialize(n)).join('')

  switch (node.type) {
    case 'paragraph':
      return `${children}<br>`
    default:
      return children
  }
}

export default serialize;
