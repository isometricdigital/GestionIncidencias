<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Incidencia
 *
 * @author tuguu
 */
namespace Incidencias\IncidenciaBundle\Document;
use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;

/**
 * @MongoDB\Document
 */
class Incidencia {
    
    /**
     * @MongoDB\Id
     */
    protected $id;
    /**
     * @MongoDB\ReferenceOne(targetDocument="Estado")
     */
    protected $estado;
    /**
     * @MongoDB\ReferenceOne(targetDocument="Empleado")
     */
    protected $empleado;
    /**
     * @MongoDB\String
     */
    protected $asunto;
    /**
     * @MongoDB\String
     */
    protected $descripcion;
    /**
     * @MongoDB\ReferenceOne(targetDocument="Image")
     */
    protected $imagen;
    /**
     * @MongoDB\String
     */
    protected $solucion;
    /**
     * @MongoDB\Date
     */
    protected $fecha;

    /**
     * Get id
     *
     * @return id $id
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set estado
     *
     * @param Incidencias\IncidenciaBundle\Document\Estado $estado
     * @return \Incidencia
     */
    public function setEstado(\Incidencias\IncidenciaBundle\Document\Estado $estado)
    {
        $this->estado = $estado;
        return $this;
    }

    /**
     * Get estado
     *
     * @return Incidencias\IncidenciaBundle\Document\Estado $estado
     */
    public function getEstado()
    {
        return $this->estado;
    }

    /**
     * Set empleado
     *
     * @param Incidencias\IncidenciaBundle\Document\Empleado $empleado
     * @return \Incidencia
     */
    public function setEmpleado(\Incidencias\IncidenciaBundle\Document\Empleado $empleado)
    {
        $this->empleado = $empleado;
        return $this;
    }

    /**
     * Get empleado
     *
     * @return Incidencias\IncidenciaBundle\Document\Empleado $empleado
     */
    public function getEmpleado()
    {
        return $this->empleado;
    }

    /**
     * Set asunto
     *
     * @param string $asunto
     * @return \Incidencia
     */
    public function setAsunto($asunto)
    {
        $this->asunto = $asunto;
        return $this;
    }

    /**
     * Get asunto
     *
     * @return string $asunto
     */
    public function getAsunto()
    {
        return $this->asunto;
    }

    /**
     * Set descripcion
     *
     * @param string $descripcion
     * @return \Incidencia
     */
    public function setDescripcion($descripcion)
    {
        $this->descripcion = $descripcion;
        return $this;
    }

    /**
     * Get descripcion
     *
     * @return string $descripcion
     */
    public function getDescripcion()
    {
        return $this->descripcion;
    }

 

    /**
     * Set solucion
     *
     * @param string $solucion
     * @return \Incidencia
     */
    public function setSolucion($solucion)
    {
        $this->solucion = $solucion;
        return $this;
    }

    /**
     * Get solucion
     *
     * @return string $solucion
     */
    public function getSolucion()
    {
        return $this->solucion;
    }

    /**
     * Set fecha
     *
     * @param date $fecha
     * @return \Incidencia
     */
    public function setFecha($fecha)
    {
        $this->fecha = $fecha;
        return $this;
    }

    /**
     * Get fecha
     *
     * @return date $fecha
     */
    public function getFecha()
    {
        return $this->fecha;
    }

    /**
     * Set imagen
     *
     * @param Incidencias\IncidenciaBundle\Document\Image $imagen
     * @return \Incidencia
     */
    public function setImagen(\Incidencias\IncidenciaBundle\Document\Image $imagen)
    {
        $this->imagen = $imagen;
        return $this;
    }

    /**
     * Get imagen
     *
     * @return Incidencias\IncidenciaBundle\Document\Image $imagen
     */
    public function getImagen()
    {
        return $this->imagen;
    }
}
