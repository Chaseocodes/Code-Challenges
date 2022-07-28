// 7 kyu challenge

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// my answer:

function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4)
  }
  