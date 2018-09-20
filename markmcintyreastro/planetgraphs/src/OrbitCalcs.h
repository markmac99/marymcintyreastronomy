#pragma once

#ifndef _WIN32
#define __stdcall 
#endif 
#include "Comets.h"

#define PI			3.141592654
#define TWOPI		6.283185307
#define ERAD		6378.14			// km
#define AU			149597870.7		// km
#define RAD2DEG		57.29577951	
#define HR2DEG		15.04107		// precision value

#define NUMELEMENTS 60

#define SUN			0
#define MOON		1
#define MERCURY		2
#define VENUS		3
#define MARS		4
#define JUPITER		5
#define SATURN		6
#define URANUS		7
#define NEPTUNE		8
#define EARTH		9
#define PLUTO		10

#define LASTASTEROID 20
#define KEPLERIANLIMIT 0.98
#define KEPLERIANCONST 0.01720209895 

typedef struct OrbitalElements
{
	char	name[64];		// name
	double	N[2];			// longitude of ascending node
	double	incl[2];		// inclination
	double	omega[2];		// arg of perihelion
	double	a[2];			// semimajor axis (AU except for moon which is in ERAD)
	double	e[2];			// eccentricity
	double	MA[2];			// mean anomaly
	double	mag[4];			// abs magnitude
	double	siz;			// abs size in arcsecs
	int		epoch[3];		// epoch of data
}_OrbitalElements;

extern struct OrbitalElements *elements;
extern char szPath[512];
extern char szOutputPath[512];
extern char szErrorPath[512];

int LoadOrbitalElements(void);
extern int maxloaded;

double __stdcall GetDateFromDtval(double dtval, int& yy, int& mo, int& dd, int& hh, int& mm, int& ss);
double __stdcall GetDtvalFromDate(int yy, int mo, int dd, int hh, int mm, int ss);

double __stdcall AstroDaysFromDt(double dtval);
double __stdcall days(int yy, int mo, int dd, int hh, int mm, int ss);
double __stdcall JulianDate(int yy, int mo, int dd, int hh, int mm, int ss);
double __stdcall LocalSiderealTime(int yy, int mo, int dd, int hh, int Mm, int ss, double ll);
double __stdcall LSTFromDt(double dtval, double longi);
long __stdcall DtvalToUnixTS(double dtval);
long __stdcall AstroDtToUnixTS(double dd);

double __stdcall GetOrbitalParam(int planetno, int what);
double __stdcall MeanAnomaly(int planetno, double dd);
double __stdcall LongOfAscNode(int planetno, double d);
double __stdcall Eccentricity(int planetno, double d);
double __stdcall Inclination(int planetno, double d);
double __stdcall EccentricAnomaly(double m, double e);
double __stdcall ArgOfPerihelion(int planetno, double dd);
double __stdcall ObliquityofEcliptic(double dd);
double __stdcall PrecessionCorr(double epoch, double dd);
double __stdcall SunLongitude(double v, double dd);
double __stdcall SunRA(double dd);
double __stdcall SunDec(double dd);
double __stdcall PlanDist(int planetno, double dd);
double __stdcall PlanTrueAnomaly(int planetno, double d);
double __stdcall AzFromRADec(double  lst, double ra, double dec, double lat, int zora, double temp, double pres);
double __stdcall PlanetXYZ(int planetno, double dd, int xyz, double lst, double lat, double temp, double pres); 
double __stdcall MoonPerturbations(double dd, int latlongpos);
double __stdcall GasPerturbations(int planetno, double dd, int latlongpos);
double __stdcall SunRiseSet(double dtval, double lat, double longi, int ros, double h, double temp, double pres);
double __stdcall RiseSet(int planetno, double dtval, double  lat, double longi, int ros, double h, double temp, double pres);
double __stdcall TimeofTransit(int planetno, double dtval, double lat, double longi);
double __stdcall IsVisible(int planetno, double dtval, double lat, double longi, int vis_or_tele, int a_or_t, double temp, double pres);
double __stdcall AltAtTransit(int planetno, double dtval, double lat, double longi, double temp, double pres);

void DoPluto(double dd, double& lonecl, double& latecl, double& r);

double __stdcall PhaseOrElong(long planetno, double dd, short poe);
double __stdcall Elongation(long planetno, double dd);
double __stdcall Phase(long planetno, double dd);
double __stdcall VisualMagnitude(long planetno, double dd);
double __stdcall ApparentSize(long planetno, double dd);
double __stdcall SaturnRingMag(double dd);

void CreateOutputFiles(double lati, double longi, double dt);