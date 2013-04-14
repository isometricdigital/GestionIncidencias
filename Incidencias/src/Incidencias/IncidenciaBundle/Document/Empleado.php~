<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Empleado
 *
 * @author tuguu
 */
namespace Incidencias\IncidenciaBundle\Document;
use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;

/**
 * @MongoDB\Document
 */
class Empleado {
    
    /**
     * @MongoDB\Id
     */
    protected $id;
    /**
     * @MongoDB\ReferenceOne(targetDocument="Departamento")
     */
    protected $departamento;
    /**
     * @MongoDB\String
     */
    protected $dni;
    /**
     * @MongoDB\String
     */
    protected $nombre;
    /**
     * @MongoDB\String
     */
    protected $correo;

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
     * Set departamento
     *
     * @param Incidencias\IncidenciaBundle\Document\Departamento $departamento
     * @return \Empleado
     */
    public function setDepartamento(\Incidencias\IncidenciaBundle\Document\Departamento $departamento)
    {
        $this->departamento = $departamento;
        return $this;
    }

    /**
     * Get departamento
     *
     * @return Incidencias\IncidenciaBundle\Document\Departamento $departamento
     */
    public function getDepartamento()
    {
        return $this->departamento;
    }

    /**
     * Set dni
     *
     * @param string $dni
     * @return \Empleado
     */
    public function setDni($dni)
    {
        $this->dni = $dni;
        return $this;
    }

    /**
     * Get dni
     *
     * @return string $dni
     */
    public function getDni()
    {
        return $this->dni;
    }

    /**
     * Set nombre
     *
     * @param string $nombre
     * @return \Empleado
     */
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
        return $this;
    }

    /**
     * Get nombre
     *
     * @return string $nombre
     */
    public function getNombre()
    {
        return $this->nombre;
    }

    /**
     * Set correo
     *
     * @param string $correo
     * @return \Empleado
     */
    public function setCorreo($correo)
    {
        $this->correo = $correo;
        return $this;
    }

    /**
     * Get correo
     *
     * @return string $correo
     */
    public function getCorreo()
    {
        return $this->correo;
    }
}
