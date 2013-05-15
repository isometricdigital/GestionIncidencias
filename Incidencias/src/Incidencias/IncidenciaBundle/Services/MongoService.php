<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of MongoService
 *
 * @author tuguu
 */

namespace Incidencias\IncidenciaBundle\Services;

use Incidencias\IncidenciaBundle\Document\Departamento;
use Incidencias\IncidenciaBundle\Document\Empleado;
use Incidencias\IncidenciaBundle\Document\Encargado;
use Incidencias\IncidenciaBundle\Document\Estado;
use Incidencias\IncidenciaBundle\Document\Incidencia;
use Incidencias\IncidenciaBundle\Document\Image;

class MongoService {

    protected  $managerMongo;
    protected $absolutePathSaveImages;
    protected $relativePathShowImages;

    public function __construct($mongo,$pathSaveImages,$pathShowImages) {
        $this->managerMongo = $mongo->getManager();
        $this->absolutePathSaveImages=$pathSaveImages;
        $this->relativePathShowImages=$pathShowImages;
    }
    
    public function getIncidencias(){
        return $this->managerMongo->getRepository('IncidenciaBundle:Incidencia')->findAll();
    }
    /* Here initialize te constant values to the db*/
    public function initValues() {
        $estado=new Estado();
        $estado->setNombre('Solicitada');
        $this->managerMongo->persist($estado);
        
        $nuevo=new Estado();
        $nuevo->setNombre('Pendiente');
         $this->managerMongo->persist($nuevo);
        
        $nuevo=new Estado();
        $nuevo->setNombre('Completada');
         $this->managerMongo->persist($nuevo);
        
        $nuevo=new Departamento();
        $nuevo->setNombre('Tecnologia');
         $this->managerMongo->persist($nuevo);
        
        $nuevo=new Departamento();
        $nuevo->setNombre('Limpieza');
         $this->managerMongo->persist($nuevo);
        
        $nuevo=new Departamento();
        $nuevo->setNombre('Marketing');
         $this->managerMongo->persist($nuevo);
        
        $nuevo=new Departamento();
        $nuevo->setNombre('Ventas');
         $this->managerMongo->persist($nuevo);
        
        $nuevo=new Departamento();
        $nuevo->setNombre('Recursos humanos');
         $this->managerMongo->persist($nuevo);
        
         $this->managerMongo->flush();
        
        $repositoryDepartamento=$this->managerMongo->getRepository('IncidenciaBundle:Departamento');
        $nuevo=new Empleado();
        $nuevo->setDni('54778899E');
        $nuevo->setNombre('Sara');
        $nuevo->setCorreo('teraxgirl@gmail.com');
        $departamento=$repositoryDepartamento->findOneByNombre('Tecnologia');
        $nuevo->setDepartamento($departamento);
         $this->managerMongo->persist($nuevo);
        
        $nuevo=new Empleado();
        $nuevo->setDni('54332211R');
        $nuevo->setNombre('Aaron');
        $nuevo->setCorreo('aaron@gmail.com');
        $departamento=$repositoryDepartamento->findOneByNombre('Marketing');
        $nuevo->setDepartamento($departamento);
         $this->managerMongo->persist($nuevo);
        
        $nuevo=new Empleado();
        $nuevo->setDni('54898978S');
        $nuevo->setNombre('Tania');
        $nuevo->setCorreo('tania@gmail.com');
        $departamento=$repositoryDepartamento->findOneByNombre('Ventas');
        $nuevo->setDepartamento($departamento);
         $this->managerMongo->persist($nuevo);
        
         $this->managerMongo->flush();

        $repositoryEmpleado=$this->managerMongo->getRepository('IncidenciaBundle:Empleado');
        $nuevo=new Encargado();
        $nuevo->setEmpleado($repositoryEmpleado->findOneByDni('54898978S'));
        $nuevo->setUser('user');
        $nuevo->setPassword('user');
         $this->managerMongo->persist($nuevo);
        
         $this->managerMongo->flush();
        
    }
    public function getEmpleado($dni){
       return $this->managerMongo->getRepository('IncidenciaBundle:Empleado')->findOneByDni($dni);
    }public function getImagen($id){
       return $this->managerMongo->getRepository('IncidenciaBundle:Image')->find($id);
    }public function getIncidencia($id){
       return $this->managerMongo->getRepository('IncidenciaBundle:Incidencia')->find($id);
    }
      public function getEstadoByNombre($nombre){
       return $this->managerMongo->getRepository('IncidenciaBundle:Estado')->findOneByNombre($nombre);
    }
    
    public function updateIncidencia($id,$descripcion,$asunto,$solucion,$estado=null,$imagen=null){
        $incidencia=  $this->getIncidencia($id);
        $incidencia->setDescripcion($descripcion);
        $incidencia->setAsunto($asunto);
        $incidencia->setSolucion($solucion);
        if($imagen!=null){
            $incidencia->setImagen($imagen);
        }
        if($estado!=null){
            $incidencia->setEstado($estado);
        }
         $this->managerMongo->persist($incidencia);
        
         $this->managerMongo->flush();
    }
    
    public function insertIncidencia($descripcion,$asunto,$empleado,$imagen=null){
        $incidencia=new Incidencia();
        $incidencia->setAsunto($asunto);
        $incidencia->setDescripcion($descripcion);
        $incidencia->setEmpleado($empleado);
        $incidencia->setFecha(new \MongoDate());
        $incidencia->setEstado($this->getEstadoByNombre('Solicitada'));
        $incidencia->setSolucion('');
        if($imagen!=null){
            $incidencia->setImagen($imagen);
        }
         $this->managerMongo->persist($incidencia);
        
         $this->managerMongo->flush();
    }
    public function insertImage($name, $path = null, $relativePath = null) {
        $image = new Image();
        $image->setName($name);
        if ($path == null) {
            $path = $this->absolutePathSaveImages . $name;
        }
        if ($relativePath == null) {
            $relativePath = $this->relativePathShowImages. $name;
        }
        $image->setPath($path);
        $image->setRelativePath($relativePath);
        $this->managerMongo->persist($image);
        $this->managerMongo->flush();
        return $image;
    }

}

?>
