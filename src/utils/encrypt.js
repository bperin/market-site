import forge from 'node-forge'

/**
 *
 * @param {String} encryptedText
 * @param {string} privateKey
 * @returns
 */
const encryptString = (plainText, publicKey) => {
  const publicKeyObj = forge.pki.publicKeyFromPem(publicKey)
  const encrypted = publicKeyObj.encrypt(plainText, 'RSA-OAEP')
  console.log('encrypted: ', encrypted)
  return forge.util.encode64(encrypted)
}

/**
 *
 * @param {String} encryptedText
 * @param {string} privateKey
 * @returns
 */
const decryptString = (encryptedText, privateKey) => {
  const privateKeyObj = forge.pki.privateKeyFromPem(privateKey)
  const decrypted = privateKeyObj.decrypt(forge.util.decode64(encryptedText), 'RSA-OAEP')
  console.log('decrypted: ', decrypted)
  return decrypted
}

export { encryptString, decryptString }
