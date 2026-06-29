'use client'

import { useState } from 'react'

export default function QuoteForm({ dict, lang, variant = 'default' }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    city: '',
    fuelType: '',
    quantity: '',
    frequency: 'once',
    message: ''
  })
  
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false
  })
  const [showOptional, setShowOptional] = useState(false)

  const buildWaText = () => {
    const lines = [
      lang === 'ar' ? 'طلب توريد جديد — Sky Star' : 'New supply request — Sky Star',
      `${lang === 'ar' ? 'الاسم' : 'Name'}: ${formData.name}`,
      formData.company && `${lang === 'ar' ? 'الشركة' : 'Company'}: ${formData.company}`,
      `${lang === 'ar' ? 'الجوال' : 'Phone'}: ${formData.phone}`,
      formData.email && `${lang === 'ar' ? 'البريد' : 'Email'}: ${formData.email}`,
      `${lang === 'ar' ? 'المدينة' : 'City'}: ${formData.city}`,
      `${lang === 'ar' ? 'نوع الوقود' : 'Fuel'}: ${formData.fuelType}`,
      formData.quantity && `${lang === 'ar' ? 'الكمية' : 'Quantity'}: ${formData.quantity} L`,
      `${lang === 'ar' ? 'التكرار' : 'Frequency'}: ${formData.frequency}`,
      formData.message && `${lang === 'ar' ? 'الرسالة' : 'Message'}: ${formData.message}`,
    ].filter(Boolean).join('\n')
    return lines
  }

  const handleWhatsApp = (e) => {
    e.preventDefault()
    // For WhatsApp we only need name + city — the user's phone is implicit
    // (they're messaging from it). Other fields are optional.
    if (!formData.name || !formData.city) {
      setStatus({ submitting: false, success: false, error: true })
      return
    }
    const waNumber = '966507010703'
    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(buildWaText())}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ submitting: true, success: false, error: false })

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      setStatus({ submitting: false, success: true, error: false })
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        city: '',
        fuelType: '',
        quantity: '',
        frequency: 'once',
        message: ''
      })
    } catch (err) {
      setStatus({ submitting: false, success: false, error: true })
    }
  }

  const isPremium = variant === 'premium'

  return (
    <div className={`quote-form-wrap${isPremium ? ' quote-form-premium' : ''}`}>
      {!isPremium && (
        <h3 className="quote-form-heading">
          {dict.contactPage.sendMessage}
        </h3>
      )}

      {status.success && (
        <div className="quote-form-alert quote-form-alert-success animate-fade-in">
          <div>✓ {dict.contactPage.successMsg}</div>
          {(() => {
            const lines = [
              lang === 'ar' ? 'طلب توريد جديد — Sky Star' : 'New supply request — Sky Star',
              `${lang === 'ar' ? 'الاسم' : 'Name'}: ${formData.name}`,
              formData.company && `${lang === 'ar' ? 'الشركة' : 'Company'}: ${formData.company}`,
              `${lang === 'ar' ? 'الجوال' : 'Phone'}: ${formData.phone}`,
              formData.email && `${lang === 'ar' ? 'البريد' : 'Email'}: ${formData.email}`,
              `${lang === 'ar' ? 'المدينة' : 'City'}: ${formData.city}`,
              `${lang === 'ar' ? 'نوع الوقود' : 'Fuel'}: ${formData.fuelType}`,
              formData.quantity && `${lang === 'ar' ? 'الكمية' : 'Quantity'}: ${formData.quantity} L`,
              `${lang === 'ar' ? 'التكرار' : 'Frequency'}: ${formData.frequency}`,
              formData.message && `${lang === 'ar' ? 'الرسالة' : 'Message'}: ${formData.message}`,
            ].filter(Boolean).join('\n')
            const waNumber = '966507010703'
            const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(lines)}`
            return (
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-block', marginTop: 10, fontSize: '0.85rem', fontWeight: 700, textDecoration: 'underline' }}
              >
                {lang === 'ar' ? 'أرسل نفس الطلب على واتساب لتأكيد سريع ←' : 'Send the same request on WhatsApp for fast confirmation →'}
              </a>
            )
          })()}
        </div>
      )}

      {status.error && (
        <div className="quote-form-alert quote-form-alert-error animate-fade-in">
          ✗ {dict.contactPage.errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="quote-form">
        {/* Honeypot — leave empty; bots fill all fields */}
        <input
          type="text"
          name="website"
          tabIndex="-1"
          autoComplete="off"
          aria-hidden="true"
          style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
          onChange={handleChange}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
          <div className="form-group">
            <label className="form-label flex items-center gap-2" htmlFor="name">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              {dict.contactPage.formName} *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              disabled={status.submitting}
            
              suppressHydrationWarning
            />
          </div>

          <div className="form-group">
            <label className="form-label flex items-center gap-2" htmlFor="company">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
              {dict.contactPage.formCompany}
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="form-input"
              disabled={status.submitting}
            
              suppressHydrationWarning
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
          <div className="form-group">
            <label className="form-label flex items-center gap-2" htmlFor="city">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              {dict.contactPage.formCity} *
            </label>
            <input
              type="text"
              id="city"
              name="city"
              required
              placeholder={lang === 'ar' ? 'الرياض، جدة، الدمام...' : 'Riyadh, Jeddah, Dammam...'}
              value={formData.city}
              onChange={handleChange}
              className="form-input"
              disabled={status.submitting}
            
              suppressHydrationWarning
            />
          </div>

          <div className="form-group">
            <label className="form-label text-charcoal" htmlFor="fuelType">
              {dict.contactPage.formFuelType}
            </label>
            <select
              id="fuelType"
              name="fuelType"
              value={formData.fuelType}
              onChange={handleChange}
              className="form-select"
              disabled={status.submitting}
              suppressHydrationWarning
            >
              <option value="">-- {dict.contactPage.formFuelSelect} --</option>
              <option value="91">{dict.servicesPage.petrol91}</option>
              <option value="95">{dict.servicesPage.petrol95}</option>
              <option value="diesel">{dict.servicesPage.diesel}</option>
              <option value="contracting">{dict.nav.contracting}</option>
            </select>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setShowOptional(!showOptional)}
          className="quote-form-toggle"
          aria-expanded={showOptional}
          suppressHydrationWarning
        >
          {showOptional
            ? (lang === 'ar' ? '− إخفاء التفاصيل الإضافية' : '− Hide additional details')
            : (lang === 'ar' ? '+ إضافة الكمية والتفاصيل (اختياري)' : '+ Add quantity & details (optional)')}
        </button>

        <div className={`quote-form-optional${showOptional ? ' is-open' : ''}`} aria-hidden={!showOptional}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
          <div className="form-group">
            <label className="form-label flex items-center gap-2" htmlFor="phone">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              {dict.contactPage.formPhone}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+966 50 000 0000"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
              disabled={status.submitting}
              suppressHydrationWarning
            />
          </div>

          <div className="form-group">
            <label className="form-label flex items-center gap-2" htmlFor="email">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              {dict.contactPage.formEmail}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              disabled={status.submitting}
              suppressHydrationWarning
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
          <div className="form-group">
            <label className="form-label text-charcoal" htmlFor="quantity">
              {dict.contactPage.formQuantity}
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              placeholder="e.g. 6000"
              value={formData.quantity}
              onChange={handleChange}
              className="form-input"
              disabled={status.submitting}
            
              suppressHydrationWarning
            />
          </div>

          <div className="form-group">
            <label className="form-label text-charcoal">
              {dict.contactPage.formFrequency} *
            </label>
            <div className="flex gap-4 mt-1">
              <label htmlFor="freq-once" className="flex items-center gap-2 text-xs font-semibold cursor-pointer py-2 min-h-[44px]">
                <input
                  id="freq-once"
                  type="radio"
                  name="frequency"
                  value="once"
                  checked={formData.frequency === 'once'}
                  onChange={handleChange}
                  disabled={status.submitting}
                  className="w-3.5 h-3.5 accent-primary"
                  suppressHydrationWarning
                />
                {dict.contactPage.formFreqOnce}
              </label>
              <label htmlFor="freq-repeat" className="flex items-center gap-2 text-xs font-semibold cursor-pointer py-2 min-h-[44px]">
                <input
                  id="freq-repeat"
                  type="radio"
                  name="frequency"
                  value="repeat"
                  checked={formData.frequency === 'repeat'}
                  onChange={handleChange}
                  disabled={status.submitting}
                  className="w-3.5 h-3.5 accent-primary"
                  suppressHydrationWarning
                />
                {dict.contactPage.formFreqRepeat}
              </label>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label text-charcoal" htmlFor="message">
            {dict.contactPage.formMsg}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-textarea"
            disabled={status.submitting}
          
              suppressHydrationWarning
            />
        </div>
        </div>{/* /quote-form-optional */}

        <div className="quote-form-actions">
          <button
            type="button"
            onClick={handleWhatsApp}
            className="btn quote-form-wa"
            disabled={status.submitting}
          
            suppressHydrationWarning
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.85 9.85 0 0 0 1.595 5.39l-1.001 3.66 3.895-.749z"/>
              <path d="M9.536 7.165c-.247-.547-.508-.558-.743-.567-.193-.008-.413-.008-.633-.008a1.213 1.213 0 0 0-.881.413c-.303.331-1.156 1.13-1.156 2.751s1.183 3.193 1.348 3.413c.165.22 2.284 3.66 5.643 4.989 2.79 1.103 3.359.884 3.965.829.606-.055 1.954-.799 2.231-1.571.276-.771.276-1.432.193-1.571-.083-.138-.303-.221-.633-.386-.331-.165-1.954-.965-2.257-1.075-.303-.111-.523-.165-.743.166-.221.331-.852 1.075-1.045 1.295-.193.221-.385.248-.715.083-.331-.165-1.395-.514-2.657-1.64-.982-.875-1.645-1.957-1.838-2.288-.193-.331-.021-.51.145-.674.149-.149.331-.385.496-.578.165-.193.221-.331.331-.551.111-.221.055-.413-.028-.578-.083-.165-.726-1.797-1.025-2.45z"/>
            </svg>
            {lang === 'ar' ? 'إرسال على واتساب' : 'Send on WhatsApp'}
          </button>

          <button
            type="submit"
            className="btn quote-form-secondary"
            disabled={status.submitting}
          
            suppressHydrationWarning
          >
            {status.submitting
              ? (lang === 'ar' ? 'جاري الإرسال...' : 'Sending...')
              : (lang === 'ar' ? 'أو إرسال بالبريد' : 'Or send by email')}
          </button>
        </div>
      </form>
    </div>
  )
}
