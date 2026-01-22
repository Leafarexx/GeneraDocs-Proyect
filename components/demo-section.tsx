"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Download } from "lucide-react"

interface FormData {
  nombre: string
  servicio: string
  monto: string
  fecha: string
}

export function DemoSection() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    servicio: "",
    monto: "",
    fecha: new Date().toISOString().split("T")[0],
  })
  const [isGenerated, setIsGenerated] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleGenerate = () => {
    if (formData.nombre && formData.servicio && formData.monto) {
      setIsGenerated(true)
    }
  }

  const handleReset = () => {
    setFormData({
      nombre: "",
      servicio: "",
      monto: "",
      fecha: new Date().toISOString().split("T")[0],
    })
    setIsGenerated(false)
  }

  const hasData = formData.nombre || formData.servicio || formData.monto

  const formatCurrency = (value: string) => {
    const num = parseFloat(value)
    if (isNaN(num)) return "$0.00"
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
    }).format(num)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString + "T00:00:00")
    return date.toLocaleDateString("es-MX", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  }

  return (
    <section id="demo" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Prueba cómo funciona
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Llena los datos y genera un documento de ejemplo.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-8 items-start">
          {/* Form */}
          <Card className="border-border">
            <CardContent className="p-6">
              <form className="space-y-5">
                <div>
                  <Label htmlFor="nombre" className="text-foreground font-medium">
                    Nombre del cliente
                  </Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    placeholder="Ej: María García"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className="mt-2 bg-input border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Label htmlFor="servicio" className="text-foreground font-medium">
                    Servicio o concepto
                  </Label>
                  <Input
                    id="servicio"
                    name="servicio"
                    placeholder="Ej: Consulta nutricional"
                    value={formData.servicio}
                    onChange={handleInputChange}
                    className="mt-2 bg-input border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Label htmlFor="monto" className="text-foreground font-medium">
                    Monto (MXN)
                  </Label>
                  <Input
                    id="monto"
                    name="monto"
                    type="number"
                    placeholder="Ej: 800"
                    value={formData.monto}
                    onChange={handleInputChange}
                    className="mt-2 bg-input border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Label htmlFor="fecha" className="text-foreground font-medium">
                    Fecha
                  </Label>
                  <Input
                    id="fecha"
                    name="fecha"
                    type="date"
                    value={formData.fecha}
                    onChange={handleInputChange}
                    className="mt-2 bg-input border-border focus:border-primary"
                  />
                </div>
                <Button
                  type="button"
                  onClick={handleGenerate}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base"
                  disabled={!formData.nombre || !formData.servicio || !formData.monto}
                >
                  <FileText className="mr-2 w-5 h-5" />
                  Generar documento
                </Button>
                {(hasData || isGenerated) && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleReset}
                    className="w-full border-border text-muted-foreground hover:bg-muted hover:text-foreground bg-transparent"
                  >
                    Probar con otros datos
                  </Button>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Document Preview */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-card rounded-xl border border-border shadow-lg overflow-hidden">
              <div className="bg-primary/5 px-6 py-3 border-b border-border">
                <p className="text-sm font-medium text-muted-foreground">Vista previa del documento</p>
              </div>
              <div className="p-8 min-h-[400px]">
                {isGenerated ? (
                  <div className="space-y-6">
                    {/* Document Header */}
                    <div className="text-center border-b border-border pb-6">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <FileText className="w-6 h-6 text-primary" />
                        <h3 className="text-xl font-bold text-foreground">RECIBO</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">Documento generado por GeneraDocs</p>
                    </div>

                    {/* Document Body */}
                    <div className="space-y-4 text-sm">
                      <div className="flex justify-between py-2 border-b border-dashed border-border">
                        <span className="text-muted-foreground">Fecha:</span>
                        <span className="font-medium text-foreground">{formatDate(formData.fecha)}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-dashed border-border">
                        <span className="text-muted-foreground">Recibí de:</span>
                        <span className="font-medium text-foreground">{formData.nombre}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-dashed border-border">
                        <span className="text-muted-foreground">Concepto:</span>
                        <span className="font-medium text-foreground">{formData.servicio}</span>
                      </div>
                      <div className="flex justify-between py-3 bg-secondary/50 rounded-lg px-3 mt-4">
                        <span className="font-semibold text-foreground">Total:</span>
                        <span className="font-bold text-primary text-lg">{formatCurrency(formData.monto)}</span>
                      </div>
                    </div>

                    {/* Document Footer */}
                    <div className="pt-6 border-t border-border text-center">
                      <p className="text-xs text-muted-foreground">
                        Este documento es válido como comprobante de pago.
                      </p>
                    </div>

                    {/* Download Button */}
                    <Button
                      variant="outline"
                      className="w-full mt-4 border-primary text-primary hover:bg-primary/10 bg-transparent"
                    >
                      <Download className="mr-2 w-4 h-4" />
                      Descargar documento (demo)
                    </Button>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
                      <FileText className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <p className="text-muted-foreground">
                      Completa el formulario para ver tu documento aquí.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
