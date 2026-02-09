'use client';

/**
 * Demo Section Component
 * Demo interactiva de la plataforma con formulario y vista previa
 */

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FormData {
  nombre: string;
  empresa: string;
  servicio: string;
  monto: string;
  fecha: string;
}

export default function Demo() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    empresa: '',
    servicio: '',
    monto: '',
    fecha: new Date().toISOString().split('T')[0]
  });

  const [showPreview, setShowPreview] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPreview(true);
  };

  const handleDownload = () => {
    alert('En la version completa, aqui se descargaria un PDF real.\n\nEsta es solo una demo para mostrar la funcionalidad.');
  };

  const resetDemo = () => {
    setFormData({
      nombre: '',
      empresa: '',
      servicio: '',
      monto: '',
      fecha: new Date().toISOString().split('T')[0]
    });
    setShowPreview(false);
  };

  return (
    <section id="demo" className="py-24 px-4 sm:px-6 lg:px-8 bg-surface-warm border-y border-ink-100">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-3 tracking-tight">
            Prueba la plataforma ahora
          </h2>
          <p className="text-lg text-ink-500">
            Llena el formulario y observa como se genera tu documento
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Datos del documento</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre del cliente</Label>
                  <Input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Ej: Ana Martinez"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="empresa">Empresa / Profesional</Label>
                  <Input
                    type="text"
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    required
                    placeholder="Ej: Servicios Profesionales Lopez"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="servicio">Servicio / Concepto</Label>
                  <Input
                    type="text"
                    id="servicio"
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleChange}
                    required
                    placeholder="Ej: Consultoria profesional"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="monto">Monto</Label>
                  <Input
                    type="number"
                    id="monto"
                    name="monto"
                    value={formData.monto}
                    onChange={handleChange}
                    required
                    min="0"
                    step="0.01"
                    placeholder="Ej: 500.00"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fecha">Fecha</Label>
                  <Input
                    type="date"
                    id="fecha"
                    name="fecha"
                    value={formData.fecha}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full mt-6">
                  Generar documento
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Preview */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl">Vista previa</CardTitle>
                {showPreview && (
                  <Button
                    onClick={resetDemo}
                    variant="ghost"
                    size="sm"
                    className="text-ink-500"
                  >
                    Reiniciar
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              {!showPreview ? (
                <div className="border border-dashed border-ink-200 rounded-lg p-12 text-center">
                  <svg
                    className="w-12 h-12 text-ink-200 mx-auto mb-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-sm text-ink-400">
                    Llena el formulario para ver tu documento
                  </p>
                </div>
              ) : (
                <div className="border border-ink-200/60 rounded-lg overflow-hidden">
                  {/* Document Preview */}
                  <div className="bg-white p-8 space-y-6">
                    {/* Header */}
                    <div className="border-b border-ink-200 pb-4">
                      {/* SEO: Use p instead of h1 to avoid a second H1 in the DOM */}
                      <p className="text-2xl font-bold text-ink-900 mb-1">RECIBO</p>
                      <p className="text-xs text-ink-400">
                        Fecha: {new Date(formData.fecha).toLocaleDateString('es-MX', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>

                    {/* Business Info */}
                    <div>
                      <p className="text-xs font-semibold text-ink-400 uppercase tracking-wide mb-1">
                        De:
                      </p>
                      <p className="text-base font-semibold text-ink-900">{formData.empresa}</p>
                    </div>

                    {/* Client Info */}
                    <div>
                      <p className="text-xs font-semibold text-ink-400 uppercase tracking-wide mb-1">
                        Para:
                      </p>
                      <p className="text-base font-medium text-ink-900">{formData.nombre}</p>
                    </div>

                    {/* Service */}
                    <div className="bg-surface-warm p-4 rounded-lg border border-ink-100">
                      <p className="text-xs font-semibold text-ink-400 uppercase tracking-wide mb-1">
                        Concepto:
                      </p>
                      <p className="text-sm text-ink-900">{formData.servicio}</p>
                    </div>

                    {/* Amount */}
                    <div className="border-t border-ink-200 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-base font-semibold text-ink-900">TOTAL:</span>
                        <span className="text-xl font-bold text-ink-900">
                          ${parseFloat(formData.monto).toFixed(2)} MXN
                        </span>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="text-center pt-4 border-t border-ink-100">
                      <p className="text-xs text-ink-400">
                        Documento generado con GeneraDocs
                      </p>
                    </div>
                  </div>

                  {/* Download Button */}
                  <div className="bg-surface-warm px-6 py-4 border-t border-ink-200/60">
                    <Button
                      onClick={handleDownload}
                      variant="default"
                      size="lg"
                      className="w-full"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Descargar PDF (demo)
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
