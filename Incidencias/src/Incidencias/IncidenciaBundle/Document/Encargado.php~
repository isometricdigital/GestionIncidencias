<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Encargado
 *
 * @author tuguu
 */

namespace Incidencias\IncidenciaBundle\Document;
use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;

/**
 * @MongoDB\Document
 */
class Encargado {
    
    /**
     * @MongoDB\Id
     */
    protected $id;
    /**
     * @MongoDB\ReferenceOne(targetDocument="Empleado")
     */
    protected $empleado;
    /**
     * @MongoDB\String
     */
    protected $user;
    /**
     * @MongoDB\String
     */
    protected $password;

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
     * Set empleado
     *
     * @param Incidencias\IncidenciaBundle\Document\Empleado $empleado
     * @return \Encargado
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
     * Set user
     *
     * @param string $user
     * @return \Encargado
     */
    public function setUser($user)
    {
        $this->user = $user;
        return $this;
    }

    /**
     * Get user
     *
     * @return string $user
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * Set password
     *
     * @param string $password
     * @return \Encargado
     */
    public function setPassword($password)
    {
        $this->password = $password;
        return $this;
    }

    /**
     * Get password
     *
     * @return string $password
     */
    public function getPassword()
    {
        return $this->password;
    }
}
